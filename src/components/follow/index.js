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
    avatarImg: {
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        objectFit: 'cover',
    },
});

class Follow extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
    }
    state = { expanded: false };

    getListFollow = () =>{
        if(this.props.follows)
        return this.props.follows.map(follow=>{
            return <div>
                <ListItem>
                    <Avatar style={{width: 50, height: 50, backgroundColor: "red"}} 
                    aria-label="Recipe" className={this.props.classes.avatar2}>
                        <img className={this.props.classes.avatarImg} 
                        src={
                            follow.avatar.data?
                            `data:image/jpg;base64,${follow.avatar.data}`:
                            'https://i.pinimg.com/originals/ab/e9/2f/abe92f535382cba9615e8767c21a6304.jpg'
                            }/>
                    </Avatar>
                    <div>
                        <div style={{fontSize: 15, paddingLeft: 3, color: 'black'}}>{follow.username}</div>
                        <div style={{fontSize: 13, paddingLeft: 3, color: 'green'}}>Follow</div>
                    </div>
                </ListItem>
                <Divider variant="inset" component="li" />
            </div>
        })
    }

    componentDidMount(){
        
    }
    render(){
        return (
            <List className={this.props.classes.root}>
                {this.getListFollow()}
            </List>
        );
    }
}

Follow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Follow);