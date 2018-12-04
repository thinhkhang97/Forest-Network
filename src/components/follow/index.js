import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import red from "@material-ui/core/colors/red";

const styles = theme => ({
    root: {
        // width: '100%',
        // maxWidth: 500,
        // backgroundColor: theme.palette.background.paper,
        fontWeight: 10,
        backgroundColor: red
    },
    avatar2: {
        backgroundColor: red[450],
        width: 100,
        height: 100,
    },
});

class Follow extends React.Component{

    state = { expanded: false };

    render(){

        return (
            <List className={this.props.classes.root}>
                console.log({this.props.follow.avatar1})
                <ListItem>
                    <Avatar style={{width: 50, height: 50, backgroundColor: "red"}} aria-label="Recipe" className={this.props.classes.avatar2}>
                        {this.props.follows.avatar1}

                    </Avatar>
                    <div>
                        <div style={{fontSize: 15, paddingLeft: 3, color: 'black'}}>Nguyễn Thịnh Khang</div>
                        <div style={{fontSize: 13, paddingLeft: 3, color: 'green'}}>Follow</div>
                    </div>
                </ListItem>
                <li>
                    <Divider variant="inset" />
                </li>
                <ListItem>
                    <Avatar style={{width: 50, height: 50, backgroundColor: "red"}} aria-label="Recipe" className={this.props.classes.avatar2}>
                        L
                    </Avatar>
                    <div>
                        <div style={{fontSize: 15, paddingLeft: 3, color: 'black'}}>Nguyễn Hữu Linh</div>
                        <div style={{fontSize: 13, paddingLeft: 3, color: 'green'}}>Follow</div>
                    </div>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <Avatar style={{width: 50, height: 50, backgroundColor: "red"}} aria-label="Recipe" className={this.props.classes.avatar2}>
                        N
                    </Avatar>
                    <div>
                        <div style={{fontSize: 15, paddingLeft: 3, color: 'black'}}>Lê Xuân Nam</div>
                        <div style={{fontSize: 13, paddingLeft: 3, color: 'green'}}>Follow</div>
                    </div>
                </ListItem>
            </List>
        );
    }
}

Follow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Follow);