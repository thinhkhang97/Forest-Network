import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import ImageIcon from '@material-ui/icons/Image';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

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
        width: 70,
        height: 40,
        borderRadius: 30,
        marginTop: 10,
        fontSize: 14
    },
    input: {
        display: 'none',
    },
});

class PostInPut extends React.Component{

    render(){
        return (
            <div className="row">
                <Grid container justify="left" alignItems="left" style={{width:30, height: 30, marginLeft: 50, marginRight: 30}}>
                    <Avatar className={this.props.classes.avatar}>H</Avatar>
                </Grid>
                <textarea name="texts" id="exampleTextarea" className="form-control" placeholder="Write what you wish" defaultValue={""} style={{width:400, height: 50, marginTop: 8}}/>
                <Fab color="blue" aria-label="Edit" className={this.props.classes.fab} style={{marginLeft: 20, marginTop: 10, width: 40, height: 40}}>
                    <ImageIcon/>
                </Fab>
                <Typography variant="srOnly">Create a user</Typography>
                <Button variant="contained" color="primary" className={this.props.classes.button}>
                    public
                </Button>
            </div>
        );
    }

}

PostInPut.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostInPut);