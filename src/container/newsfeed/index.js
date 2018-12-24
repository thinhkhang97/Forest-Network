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
import { getAccountInfomation } from '../../services';
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
        paddingLeft: '10%',
        paddingRight: '10%'
    }
});

class NewFeed extends React.Component {

    privateKey = null;
    state = {
        isLoading: true
    }
    constructor(props) {
        super(props);
        this.classes = this.props.classes;
    }

    getListPosts = () => {
        return this.props.listPosts.map(post => {
            return <Post post={post} />
        })
    }

    getListFollows = () => {
        console.log(this.props.listFollows);
        return <Follow follows={this.props.listFollows} />
    }

    loadingData = async () => {
        const accountData = await getAccountInfomation(this.privateKey);
        if (accountData === null)
            alert('Wrong private key');
        else {
            this.props.dispatch({ type: 'GET_INFO', data: accountData });
        }
        this.setState({ isLoading: false });
    }


    checkIsLogin = () => {
        const pk = localStorage.getItem('privateKey');
        if (pk!=null) {
            console.log('Private key:',pk);
            this.privateKey = pk;
            if(this.props.account===null)
            this.loadingData();
            return true;
        }
        return false;
    }

    render() {
        return (
            <div className={this.classes.root}>{
                this.checkIsLogin() === false ?
                    <Redirect exact from="/" to="/signin" /> :
                    this.state.isLoading? 
                        <ReactLoading type='spinningBubbles' color='red' height='20%' width='20%' />:
                    <div>
                        <Navigation />
                        <div className={this.classes.newsfeedContainer}>
                            <div style={{ marginTop: 80 }}>
                                <Grid container spacing={24}>
                                    <Grid item xs>
                                        <div style={{ paddingBottom: 110 }}>
                                            <Link to='/mywall/timeline'>
                                                <LinkToMyWall
                                                    userName={this.props.account.username}
                                                    imageBase64={this.props.account.avatar.data.data}
                                                    numberFollowers={this.props.account.followers.length}
                                                    numberFollowings={this.props.account.following.length}
                                                    balance={this.props.account.balance}
                                                />
                                            </Link>
                                        </div>
                                        <div style={{ position: 'fixed', width: 251 }}>
                                            <div>Following</div>
                                            <div>
                                                {this.getListFollows()}
                                            </div>
                                        </div>
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
                                            <div>Followers</div>
                                            <div>
                                                {this.getListFollows()}
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
    console.log('IN NEWSFEED', state.account);
    return {
        listPosts: state.posts,
        listFollows: state.follows,
        account: state.account
    }
}

export default connect(mapStateToProps)(withStyles(styles)(NewFeed));