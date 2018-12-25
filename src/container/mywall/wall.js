import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from '../../components/navigation';
import CoverWall from '../../components/cover-wall';
import PostInput from '../../components/post-input';
import Post from '../../components/post';
import EditMenu from '../../components/edit-menu';
import EditProfile from '../../components/edit-profile';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { getAccountInfomation, getAccount, payment } from '../../services';
import swal from '@sweetalert/with-react';
const styles = {
    myWallContainer: {
        flex: 1,
        color: '#939598',
        position: 'relative'
    },
    myWallContent: {
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    contentContainer: {
        display: 'flex',
    },
    partLeft: {
        width: '25%',
    },
    partMid: {
        width: '55%',
        paddingLeft: 10,
        paddingRight: 10
    },
    partRight: {
        width: '20%',
    },
    line: {
        backgroundColor: '#f1f2f2',
        height: 1,
        width: '100%',
        marginBottom: 10
    },
}

class Wall extends React.Component {

    privateKey = null;
    state = {
        isLoading: true,
        isLogined: false
    }

    constructor(props) {
        super(props)
        this.classes = this.props.classes;
        console.log(this.props.match.params)
    }

    getListPosts = () => {
        if(this.props.wall != null)
            return this.props.wall.posts.map(post=>{
                return <div>
                <Post 
                username={this.props.wall.username} 
                post={post} 
                imageBase64={this.props.wall.avatar.data}/>
                <div className={this.classes.line} />
            </div>
            })
        else 
        return this.props.listPosts.map(post => {
            return <div>
                <Post post={post} />
                <div className={this.classes.line} />
            </div>
        })
    }

    timeLine = () => {
        return <div>
            {this.getListPosts()}
        </div>
    }

    loadingData = async () => {
        const accountData = await getAccount(this.props.match.params.publicKey);
        if (accountData === null)
            console.log('Cannot load account');
        else {
            this.props.dispatch({ type: 'GET_ACCOUNT_WALL', data: accountData });
        }
        this.setState({ isLoading: false });
    }

    componentDidMount(){
        console.log('In wall of', this.props.match.params.publicKey)
        this.loadingData();
    }

    render() {
        return (
            <div className={this.classes.myWallContainer}>{
                this.state.isLoading ?
                <ReactLoading type='spinningBubbles' height='20%' width='20%' color='red'/> :
                <div>
                    <Navigation />
                    <div className={this.classes.myWallContent}>
                        <CoverWall
                            onClickPayment={()=>{
                                console.log('Payment from', this.props.account.publicKey,'to',
                                this.props.wall.publicKey)

                                swal({
                                    text: `Payment from ${this.props.account.publicKey} to ${this.props.wall.publicKey}`,
                                    content: "input",
                                    button: {
                                      text: "Pay!",
                                      closeModal: false,
                                    },
                                  })
                                  .then(amount => {
                                      if(amount) {
                                        const pk = localStorage.getItem('privateKey');
                                        if(pk) {
                                            payment(pk,this.props.wall.publicKey,amount,16)
                                            // .then(res=>{
                                            //     console.log('Result payment:', res);
                                            //     swal({
                                            //         title: "Done!",
                                            //         text: "You have paid "+amount,
                                            //         icon: "success",
                                            //         button: "Ok",
                                            //     });
                                            // })
                                        }
                                      }
                                    })
                                //   .then(results => {
                                //     return results.json();
                                //   })
                                //   .then(json => {
                                //     const movie = json.results[0];
                                   
                                //     if (!movie) {
                                //       return swal("No movie was found!");
                                //     }
                                   
                                //     const name = movie.trackName;
                                //     const imageURL = movie.artworkUrl100;
                                   
                                //     swal({
                                //       title: "Top result:",
                                //       text: name,
                                //       icon: imageURL,
                                //     });
                                //   })
                                //   .catch(err => {
                                //     if (err) {
                                //       swal("Oh noes!", "The AJAX request failed!", "error");
                                //     } else {
                                //       swal.stopLoading();
                                //       swal.close();
                                //     }
                                //   });
                            }}
                            isHidden={true}
                            imageBase64={
                                this.props.wall != null ?
                                this.props.wall.avatar.data : 
                                null
                            }
                            followers={
                                this.props.wall != null ?
                                this.props.wall.followers.length: 
                                null
                            }
                        />
                        <div className={this.classes.contentContainer}>
                            <div className={this.classes.partLeft}>
                                <h3 style={{ textAlign: 'center', color: '#27aae1', fontSize: 18, marginTop: 20 }}>{
                                    this.props.wall != null ?
                                    this.props.wall.username :
                                    'Nancy'
                                }</h3>
                                <h3 style={{ textAlign: 'center', color: '#27aae1', fontSize: 14 }}>Money:{
                                    this.props.wall != null ?
                                    this.props.wall.balance :
                                    1000
                                }</h3>
                                <p style={{ textAlign: 'center' }}>Everything is fine</p>
                                {this.props.match.params.page === 'edit-profile' ?
                                    <EditMenu /> : <div />}
                            </div>
                            <div className={this.classes.partMid}>
                                {this.props.match.params.page === 'edit-profile' ?
                                    <EditProfile /> : this.timeLine()}
                            </div>
                            <div className={this.classes.partRight}>
                                {/*part right*/}
                            </div>
                        </div>
                    </div>
                </div>
            }
            </div>
        )
    }
}

Wall.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    listPosts: state.posts,
    wall: state.wall,
    account: state.account
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps)((withStyles(styles)(Wall)));