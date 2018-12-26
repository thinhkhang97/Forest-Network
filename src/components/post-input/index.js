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
import {publishContent} from '../../services';
import swal from 'sweetalert';

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
    primaryButton: {
        backgroundColor: '#27aae1',
        borderRadius: 18,
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: '#2e6da4'
        },
        maxHeight: 21,
        display: 'flex',
        paddingBottom: 8
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    fab: {
        minWidth: 40,
        height: 40
    }
});

class PostInPut extends React.Component{

    state={
        content: ''
    }
    render(){
        return (
            <div className={this.props.classes.row}>
                <Avatar className={this.props.classes.avatar}>H</Avatar>
                <textarea name="texts" id="exampleTextarea"
                          className="form-control"
                          placeholder="Write what you wish" defaultValue={""}
                          style={{marginRight: 10}}
                          value={this.state.content}
                          onChange={(e)=>{
                            this.setState({content: e.target.value})
                          }}
                />

                <Button variant='contained' color='primary' className={this.props.classes.primaryButton}
                    onClick={()=>{
                        const pk = localStorage.getItem('privateKey');
                        publishContent(pk,this.state.content,22).then(r=>{
                            if(r.data.success==='OK') {
                                swal('Great!!!','Publish successfully', 'success');
                            }else {
                                swal('Oops???','Publish fail','error');
                            }
                            this.setState({content: ''})
                        })
                    }}
                >
                    Publish
                </Button>
            </div>
        );
    }

}

PostInPut.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostInPut);