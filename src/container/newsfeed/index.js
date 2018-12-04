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
import { Link } from 'react-router-dom';
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

    constructor(props){
        super(props);
        this.classes = this.props.classes;
    }

    getListPosts = () => {
        return this.props.listPosts.map(post => {
            return <Post post={post} />
        })
    }
    render() {
        return (
            <div className={this.classes.root}>
                <Navigation />
                <div className={this.classes.newsfeedContainer}>
                    <div style={{ marginTop: 80 }}>
                        <Grid container spacing={24}>
                            <Grid item xs>
                                <Link to='/mywall/timeline'>
                                    <LinkToMyWall />
                                </Link>
                            </Grid>
                            <Grid item xs={6} >
                                <PostInPut />
                                <Line />
                                <div style={{ paddingTop: 20 }}>
                                    {this.getListPosts()}
                                </div>
                            </Grid>
                            <Grid item xs>
                                <Paper className={this.classes.paper}>Danh sách chuyển tiền</Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>

            </div>
        );
    }
}

NewFeed.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    listPosts: state.posts
})

export default connect(mapStateToProps)(withStyles(styles)(NewFeed));