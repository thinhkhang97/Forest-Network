import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InfoIcon from '@material-ui/icons/Info';
import LockIcon from '@material-ui/icons/Lock';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles = {
    root: {
        width: '100%',
        maxWidth: 360,
        fontSize: `0.5rem !important`,
    },
    selected: {
        '&:focus': {
            backgroundColor: '#8dc63f'
        }
    },
    list: {
    },
    listButtonItem: {
        '&:hover': {
            backgroundColor: '#8dc63f',
        },
        paddingTop: 5,
        paddingBottom: 5
    },
    listTextItem: {
        '&:hover': {
            color: 'white',
        },
        height: '100%',
        fontSize: 13,
    },
}

class EditMenu extends React.Component {

    constructor(props) {
        super(props)
        this.classes = this.props.classes;
    }
    render() {
        return (
            <div className={this.classes.root}>
                <List component="nav" className={this.classes.list}>
                    <ListItem button 
                        selected={this.props.page=='basic-info'}
                        className={this.classes.listButtonItem}
                        classes={{
                            root: this.classes.listButtonItem,
                            selected: this.classes.selected
                        }}
                        onClick={() => this.props.dispatch({ type: 'GET_PAGE', page: 'basic-info' })}
                    >
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Basic Information" classes={{
                            primary: this.classes.listTextItem,
                        }} />
                    </ListItem>

                    {/*<Divider />*/}

                    {/* <ListItem button 
                        selected={this.props.page=='change-password'}
                        className={this.classes.listButtonItem}
                        classes={{
                            root: this.classes.listButtonItem,
                            selected: this.classes.selected
                        }}
                        onClick={() => this.props.dispatch({ type: 'GET_PAGE', page: 'change-password' })}
                    >
                        <ListItemIcon>
                            <LockIcon />
                        </ListItemIcon>
                        <ListItemText primary="Change Password" classes={{
                            primary: this.classes.listTextItem
                        }} />
                    </ListItem> */}

                    {/*<Divider />*/}
                </List>
            </div>
        )
    }
}

EditMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    page: state.myWallPage
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps)(withStyles(styles)(EditMenu));