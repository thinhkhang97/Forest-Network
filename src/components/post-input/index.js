import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Grid from '@material-ui/core/Grid';

import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';


const styles = theme => ({
    avatar: {
        margin: 10,
    },
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
    toggleContainer: {
        height: 56,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: `${theme.spacing.unit}px 0`,
        background: theme.palette.background.default,
    },
    button: {
        margin: theme.spacing.unit,
        width: 100,
        height: 50,
        borderRadius: 30
    },
    input: {
        display: 'none',
    },
});

function LetterAvatars(props) {

    const { classes } = props;
    return (
        <div className="row">
            <Grid container justify="left" alignItems="left" style={{width:30, height: 30, marginLeft: 50, marginRight: 30}}>
                <Avatar className={classes.avatar}>H</Avatar>
            </Grid>
            <textarea name="texts" id="exampleTextarea" className="form-control" placeholder="Write what you wish" defaultValue={""} style={{width:400, height: 50, marginTop: 8}}/>
            <Icon style={{width:40, height: 50, marginTop: 14, fontSize: 30, marginLeft: 12}}>image</Icon>
            <Typography variant="srOnly">Create a user</Typography>
            <Button variant="contained" color="primary" className={classes.button}>
                Publish
            </Button>
        </div>
    );
}

LetterAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LetterAvatars);