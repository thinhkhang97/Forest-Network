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

const styles = {
    editProfileContainer: {
        height: '100%',
        width: '100%',
        color: '#6d6e71',
        fontSize: ' 13px'

    },
    blockTitle: {

    },
    line: {
        backgroundColor: '#f1f2f2',
        height: 1,
        width: '100%',
        marginBottom: 10
    },
    divideRow: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    partLeft: {
        width: '50%',
        paddingRight: 5,
    },
    partRight: {
        width: '50%',
        paddingLeft: 5,
    },
    formControl:{
        width: '30%',
        minWidth: 120,
    },
    primaryButton: {
        backgroundColor: '#27aae1',
        borderRadius: 18,
        textTransform: 'capitalize',
        marginTop: 10,
        '&:hover': {
            backgroundColor: '#2e6da4'
        },
        marginBottom: 10,
        width: '100%'
    },
    resize:{
        fontSize: 13
    },
    underline:{
        borderColor: '#f1f2f2',
        borderWidth: 1,
    }
}

class EditProfile extends React.Component {

    state={
        day: 10,
        month: 3,
        year: 1997,
        selectedValue: 'female',
    }

    constructor(props) {
        super(props)
        this.classes = this.props.classes;
    }

    generateDay = ()=>{
        let day = [];
        for(let i = 1; i < 31; i++) {
            day.push(<MenuItem value={i}>{i}</MenuItem>)
        }
        return day
    }

    generateMonth = ()=>{
        let month = [];
        for(let i = 1; i < 12; i++) {
            month.push(<MenuItem value={i}>{i}</MenuItem>)
        }
        return month
    }

    generateYear = ()=>{
        let year = [];
        for(let i = 1960; i < 2018; i++) {
            year.push(<MenuItem value={i}>{i}</MenuItem>)
        }
        return year
    }

    handleChange = (e)=> {
        this.setState({[e.target.name]: e.target.value})
    }

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        return (
            <div className={this.classes.editProfileContainer}>
                <div className={this.classes.blockTitle}>
                    <h4 style={{fontSize: 20, textAlign: 'center'}}>Edit basic information</h4>
                    <div className={this.classes.line}/>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                    </p>
                    <div className={this.classes.line}/>
                </div>
                <div className={this.classes.editBlock}>
                    <div className={this.classes.divideRow}>
                        <div className={this.classes.partLeft}>
                            <TextField
                                id="standard-name"
                                label="First name"
                                // className={classes.textField}
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="none"
                                fullWidth={true}
                                InputProps={{classes:{
                                    input: this.classes.resize,
                                        underline: this.classes.underline,
                                }}}
                            />
                        </div>
                        <div className={this.classes.partRight}>
                            <TextField
                                id="standard-name"
                                label="Last name"
                                // className={classes.textField}
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="none"
                                fullWidth={true}
                                InputProps={{classes:{
                                        input: this.classes.resize,
                                    }}}
                            />
                        </div>
                    </div>
                    <TextField
                        id="standard-name"
                        label="My email"
                        // className={classes.textField}
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        margin="none"
                        fullWidth={true}
                        InputProps={{classes:{
                                input: this.classes.resize,
                            }}}
                    />
                    <br/>
                    <br/>
                    <div style={{ marginTop: 10}}>
                        <b>Date of birth</b>
                    </div>

                    <div className={this.classes.divideRow}>
                        <FormControl className={this.classes.formControl}>
                            <InputLabel htmlFor="age-simple">Age</InputLabel>
                            <Select
                                value={this.state.day}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'day',
                                    id: 'age-simple',
                                }}
                                classes={{
                                    select: this.classes.resize,
                                    selectMenu: this.classes.resize,
                                }}
                            >
                                {this.generateDay()}
                            </Select>
                        </FormControl>
                        <FormControl className={this.classes.formControl}>
                            <InputLabel htmlFor="age-simple">Month</InputLabel>
                            <Select
                                value={this.state.month}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'month',
                                    id: 'age-simple',
                                }}
                            >
                                {this.generateMonth()}
                            </Select>
                        </FormControl>
                        <FormControl className={this.classes.formControl}>
                            <InputLabel htmlFor="age-simple">Year</InputLabel>
                            <Select
                                value={this.state.year}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'year',
                                    id: 'age-simple',
                                }}
                            >
                                {this.generateYear()}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <b>I am a:</b>
                        <Radio
                            checked={this.state.selectedValue === 'male'}
                            onChange={this.handleChange}
                            value="male"
                            name="male"
                            aria-label="male"
                            icon={<RadioButtonUncheckedIcon fontSize="small" />}
                            checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                        />
                        Male
                        <Radio
                            checked={this.state.selectedValue === 'female'}
                            onChange={this.handleChange}
                            value="female"
                            name="female"
                            aria-label="female"
                            icon={<RadioButtonUncheckedIcon fontSize="small" />}
                            checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                        />
                        Female
                    </div>
                    <div className={this.classes.divideRow}>
                        <div className={this.classes.partLeft}>
                            <TextField
                                id="standard-name"
                                label="My city"
                                // className={classes.textField}
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="none"
                                fullWidth={true}
                            />
                        </div>
                        <div className={this.classes.partRight}>
                            <TextField
                                id="standard-name"
                                label="My country"
                                // className={classes.textField}
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="none"
                                fullWidth={true}
                            />
                        </div>
                    </div>
                    <TextField
                        id="standard-name"
                        label="Your description"
                        // className={classes.textField}
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        margin="none"
                        multiline={true}
                        fullWidth={true}
                    />
                </div>
                <Button variant='contained' color='primary' className={this.classes.primaryButton}>
                    Save Changes
                </Button>
            </div>
        )
    }
}

EditProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
}

export default (withStyles(styles)(EditProfile));