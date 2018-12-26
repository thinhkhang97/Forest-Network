import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

import moment from 'moment';

const styles = theme => ({
    card: {
        width: '100%'
    },
    media: {
        height: 0,
        paddingLeft: 500,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    avatar2: {
        backgroundColor: red[150],
        width: 30,
        height: 30,
    },
    button: {
        width: 10,
        height: 10
    },
    img: {
    },
    avatarImg: {
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        objectFit: 'cover',
    },
});

class Post extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    getListComment(){
        const listComments = this.props.post.comment;
        if(listComments)
        return listComments.map(comment=>{
            return <div>
                <ListItem alignItems="flex-start">
                <Avatar aria-label="Recipe" className={this.props.classes.avatar}>
                    {comment.avatar}
                </Avatar>
                <ListItemText
                    primary={comment.name}
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={this.props.classes.inline} color="textPrimary">
                            {comment.content}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            </div>
        })
    }

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    render() {
        const { classes } = this.props;

        return (
            <Card className={this.props.classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={this.props.classes.avatar}>
                            <img  className={this.props.classes.avatarImg}
                            src={
                            this.props.imageBase64!=null ?
                            `data:image/jpg;base64,${this.props.imageBase64}`:
                            'https://i.pinimg.com/originals/ab/e9/2f/abe92f535382cba9615e8767c21a6304.jpg'
                            }/>
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={ this.props.username +': '+this.props.post.title}
                    subheader={moment(this.props.post.time).fromNow()}
                />
                <CardContent>
                    <Typography component="p">
                        {this.props.post.content}
                    </Typography>
                </CardContent>
                <CardActions className={this.props.classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={classnames(this.props.classes.expand, {
                            [this.props.classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <List className={this.props.classes.root}>
                        {this.getListComment()}
                    </List>
                    <div style={{display: 'flex', width: "100%", paddingLeft: 20, paddingRight: 20, paddingBottom: 20,}}>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="input-with-icon-adornment">Write your comment</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Avatar style={{width: 20, height: 20}} aria-label="Recipe" className={classes.avatar2}>
                                            K
                                        </Avatar>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <div>
                            <IconButton >
                                <MoreVertIcon />
                            </IconButton>
                        </div>
                    </div>
                </Collapse>
            </Card>
        );
    }
}

Post.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);