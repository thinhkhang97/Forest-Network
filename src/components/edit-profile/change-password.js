import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button/Button";
import {styles} from './style';
class ChangePassword extends React.Component {

    state={
    }

    constructor(props) {
        super(props)
        this.classes = this.props.classes;
    }

    handleChange = (e)=> {
        this.setState({[e.target.name]: e.target.value})
    }

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        return (
            // Change basic information
            <div className={this.classes.editProfileContainer}>
                <div className={this.classes.blockTitle}>
                    <h4 style={{fontSize: 20, textAlign: 'center'}}>Change Password</h4>
                    <div className={this.classes.line}/>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                    </p>
                    <div className={this.classes.line}/>
                </div>
                <div className={this.classes.editBlock}>
                <TextField
                        id="standard-name"
                        label="Old password"
                        // className={classes.textField}
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        margin="none"
                        fullWidth={true}
                        type="password"
                        InputProps={{classes:{
                                input: this.classes.resize,
                            }}}
                    />
                    <div className={this.classes.divideRow}>
                        <div className={this.classes.partLeft}>
                            <TextField
                                id="standard-name"
                                label="New password"
                                // className={classes.textField}
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="none"
                                fullWidth={true}
                                type="password"
                                InputProps={{classes:{
                                    input: this.classes.resize,
                                        underline: this.classes.underline,
                                }}}
                            />
                        </div>
                        <div className={this.classes.partRight}>
                            <TextField
                                id="standard-name"
                                label="Confirm password"
                                // className={classes.textField}
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="none"
                                fullWidth={true}
                                type="password"
                                InputProps={{classes:{
                                        input: this.classes.resize,
                                    }}}
                            />
                        </div>
                    </div>
                </div>
                <Button variant='contained' color='primary' className={this.classes.primaryButton}>
                    Update Password
                </Button>
            </div>

            // Change password

        )
    }
}

ChangePassword.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
}

export default (withStyles(styles)(ChangePassword));