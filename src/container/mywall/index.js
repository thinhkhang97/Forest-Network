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
import { getAccountInfomation, getAccount } from '../../services';
import History from '../../components/history';
import Follow from "../../components/follow";

const styles = {
    myWallContainer: {
        flex: 1,
        color: '#939598',
        position: 'relative'
    },
    myWallContent: {
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    contentContainer: {
        display: 'flex',
    },
    partLeft: {
        width: '20%',
    },
    partMid: {
        width: '55%',
        paddingLeft: 10,
        paddingRight: 10
    },
    partRight: {
        width: '25%',
    },
    line: {
        backgroundColor: '#f1f2f2',
        height: 1,
        width: '100%',
        marginBottom: 10
    },
}

class MyWall extends React.Component {

    privateKey = null;
    state = {
        isLoading: false,
        isLogined: false,
        listFollowing: []
    }

    constructor(props) {
        super(props)
        this.classes = this.props.classes;
        console.log(this.props.match.params)
    }

    getListPosts = () => {
        if(this.props.account != null)
            return this.props.account.posts.map(post=>{
                return <div>
                <Post 
                username={this.props.account.username} 
                post={post} 
                imageBase64={this.props.account.avatar.data}/>
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
            <PostInput />
            <div className={this.classes.line} />
            {this.getListPosts()}
        </div>
    }

    loadingData = async () => {
        const accountData = await getAccountInfomation(this.privateKey);
        if (accountData === null)
            alert('Wrong private key');
        else {
            this.props.dispatch({ type: 'GET_INFO', data: accountData });
            this.setState({ isLogined: true })
        }
        await this.loadListFollowing();
        this.setState({ isLoading: false });
        
    }

    componentDidMount(){
        if(this.props.account === null) {
            this.privateKey = localStorage.getItem('privateKey');
            this.setState({isLoading: true});
            this.loadingData();
        }
    }

    getListFollowing = () => {
        return <Follow follows={this.state.listFollowing} />
    }

    loadListFollowing = async()=>{
        const listFling = this.props.account.following
        const listData = []
        for(let i = 0; i < listFling.length; i++) {
            const data = await getAccount(listFling[i].publicKey)
            if(data)
                listData.push(data);
        }
        if(listData.length>0){
            console.log('LIST FOLLOWING', listData);
            this.setState({listFollowing: listData});
        }
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
                            isMe={true}
                            imageBase64={
                                this.props.account != null ?
                                this.props.account.avatar.data : 
                                null
                            }
                            followers={
                                this.props.account != null ?
                                this.props.account.followers.length: 
                                null
                            }
                        />
                        <div className={this.classes.contentContainer}>
                            <div className={this.classes.partLeft}>
                                <h5 style={{ textAlign: 'center', color: '#27aae1', fontSize: 18, marginTop: 20 }}>{
                                    this.props.account != null ?
                                    this.props.account.username :
                                    'Nancy'
                                    }</h5>
                                <h5 style={{ textAlign: 'center', color: '#27aae1', fontSize: 14}}>Following: {
                                this.props.account != null ?
                                this.props.account.following.length :
                                1000
                                }</h5>
                                <h5 style={{ textAlign: 'center', color: '#27aae1', fontSize: 14}}>Sequence: {
                                this.props.account != null ?
                                this.props.account.sequence :
                                159
                                }</h5>
                                <h5 style={{ textAlign: 'center', color: '#27aae1', fontSize: 14}}>Money:{
                                this.props.account != null ?
                                this.props.account.balance :
                                10000000
                                } CELL</h5>
                                <h5 style={{ textAlign: 'center', color: '#27aae1', fontSize: 14}}>Energy:48529 OXY
                                </h5>

                                <p style={{ textAlign: 'center' }}>Everything is fine</p>
                                {this.props.match.params.page === 'edit-profile' ?
                                    <EditMenu /> : <div />}
                            </div>
                            <div className={this.classes.partMid}>
                                {this.props.match.params.page === 'edit-profile' ?
                                    <EditProfile /> : this.props.match.params.page === 'history'?
                                    <History timeline={this.props.account?this.props.account.timeline:[]}/> :
                                    this.timeLine()}
                            </div>
                            <div className={this.classes.partRight}>
                                    <div style={{textAlign: 'center'}}>Following</div>
                                    <div style={{ overflow: 'auto' }}>
                                        {this.getListFollowing()}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            </div>
        )
    }
}

MyWall.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    listPosts: state.posts,
    account: state.account
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps)((withStyles(styles)(MyWall)));