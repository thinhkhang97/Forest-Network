import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navigation from "../../components/navigation";
// import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinkToMyWall from "../../components/link-to-my-wall";
import Post from "../../components/post";
import PostInPut from "../../components/post-input";
import Icon from '@material-ui/core/Icon';
import Line from '../../components/line';
import { Link, Redirect } from 'react-router-dom';
import Follow from "../../components/follow";
import { getAccountInfomation, getAllNewsfeed, getSomeUserRecommend } from '../../services';
import ReactLoading from 'react-loading';
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    newsfeedContainer: {
        paddingLeft: '5%',
        paddingRight: '5%'
    }
});

class NewFeed extends React.Component {

    privateKey = null;
    state = {
        isLoading: false,
        isLogined: false
    }
    constructor(props) {
        super(props);
        this.classes = this.props.classes;
    }

    getListPosts = () => {
        if(this.props.newsfeed) {
            return this.props.newsfeed.map(post=>{
                return <Post 
                username={post.username} 
                post={post} 
                imageBase64={post.avatar.data}
                />
            })
        }
        return this.props.listPosts.map(post => {
            return <Post post={post} />
        })
    }

    getListRecommendUsers = () => {
        console.log('Recommend user', this.props.recommendUsers);
        return <Follow follows={this.props.recommendUsers} />
    }

    loadingData = async () => {
        const accountData = await getAccountInfomation(this.privateKey);
        const nf = await getAllNewsfeed(0,20);
        const ru = await getSomeUserRecommend();
        console.log('GOT REC USERS',ru);
        if (accountData === null)
            alert('Wrong private key');
        else {
            this.props.dispatch({ type: 'GET_INFO', data: accountData });
            this.props.dispatch({ type: 'ADD_POST_NEWSFEED', data: nf});
            this.props.dispatch({ type: 'GET_RECOMMEND_USERS', data: ru})
        }
        this.setState({ isLoading: false });
    }


    checkIsLogin = () => {
        const pk = localStorage.getItem('privateKey');
        if (pk != null) {
            console.log('Private key:', pk);
            this.privateKey = pk;
            if (this.props.account === null)
                this.loadingData();
            return true;
        }
        return false;
    }

    componentDidMount() {
        // Check is has data
        if(this.props.account === null) {
            this.privateKey = localStorage.getItem('privateKey');
            this.setState({isLoading: true});
            this.loadingData();
        }
    }

    render() {
        return (
            <div className={this.classes.root}>{
                this.state.isLoading ?
                <ReactLoading type='spinningBubbles' height='20%' width='20%' color='red'/> :
                <div>
                    <Navigation />
                    <div className={this.classes.newsfeedContainer}>
                        <div style={{ marginTop: 80 }}>
                            <Grid container spacing={24}>
                                <Grid item xs>
                                    <div style={{ paddingBottom: 110 }}>
                                        <Link to='/mywall/timeline'>
                                            <LinkToMyWall
                                                userName={this.props.account != null ? this.props.account.username : null}
                                                imageBase64={
                                                    this.props.account != null ?
                                                        this.props.account.avatar.data :
                                                        null
                                                }
                                                numberFollowers={
                                                    this.props.account != null ?
                                                        this.props.account.followers.length : null}
                                                numberFollowings={
                                                    this.props.account != null ?
                                                        this.props.account.following.length : null
                                                }
                                                balance={
                                                    this.props.account != null ?
                                                        this.props.account.balance : null
                                                }
                                            />
                                        </Link>
                                    </div>
                                    {/* <div style={{ position: 'fixed', width: 251 }}>
                                        <div>Following</div>
                                        <div>
                                            {this.getListFollows()}
                                        </div>
                                    </div> */}
                                </Grid>
                                <Grid item xs={6} >
                                    <PostInPut />
                                    <Line />
                                    <div style={{ paddingTop: 20 }}>
                                        {this.getListPosts()}
                                    </div>
                                </Grid>
                                <Grid item xs>
                                    {/*<Paper className={this.classes.paper}>Danh sách chuyển tiền</Paper>*/}
                                    <div style={{ position: 'fixed', width: 251 }}>
                                        <div>Recommend users</div>
                                        <div>
                                            {this.getListRecommendUsers()}
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            }</div>
        );
    }
}

NewFeed.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    console.log('IN NEWSFEED', state.account, state.newsfeed);
    return {
        listPosts: state.posts,
        listFollows: state.follows,
        account: state.account,
        newsfeed: state.newsfeed,
        recommendUsers: state.recommendUsers
    }
}

export default connect(mapStateToProps)(withStyles(styles)(NewFeed));