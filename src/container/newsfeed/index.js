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
import Line from '../../components/line'
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function NewFeed(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Navigation />
            <div style={{marginTop: 80}}>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <div style={{ paddingLeft: 10 }}>
                                <LinkToMyWall />
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <PostInPut />
                        <Line/>
                        <div style={{paddingTop: 20 }}>
                            <Post />
                            <br/>
                            <Post />
                            <br/>
                            <Post />
                            <br/>
                            <Post />
                            <br/>
                            <Post />
                            <br/>
                            <Post />
                        </div>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>Danh sách chuyển tiền</Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

NewFeed.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewFeed);