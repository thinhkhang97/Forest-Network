import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Register from './register'
import {getAccountInfomation} from '../../services';
import {connect} from 'react-redux';
import swal from 'sweetalert';
const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    register: {
        alignItems: 'right',
        textAlign: 'right',
        justifyContent: 'right',
        color: 'blue'
    }
});

class SignIn extends React.Component {
    state = {
        privateKey: '',
        isLoading: false
    }

    loading = () => {
        return <div>
            <ReactLoading type='spinningBubbles' color='#e5e5e5' height='20%' width='20%' />
        </div>
    }

    loadingData = async ()=>{
        const accountData = await getAccountInfomation(this.state.privateKey);
        if(accountData === null) {
            swal('Signed Fail', 'We couldnt find you account.Please check your private key', 'error');
            this.setState({isLoading: false});
        }
        else {
            this.props.dispatch({type: 'GET_INFO', data: accountData});
            console.log('Set private key to local', this.state.privateKey);
            await localStorage.setItem('privateKey', this.state.privateKey);
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>
                {!this.state.isLoading ?
                    <main className={this.props.classes.main}>

                        <CssBaseline />
                        <Paper className={this.props.classes.paper}>
                            <Avatar className={this.props.classes.avatar}>
                                <LockIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                        </Typography>
                            <form className={this.props.classes.form}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="password">Private key</InputLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={this.state.privateKey}
                                        onChange={(e) => {
                                            this.setState({ privateKey: e.target.value })
                                        }}
                                    />
                                </FormControl>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={this.props.classes.submit}
                                        onClick={() => {
                                            this._isMounted = true;
                                            console.log('Submit private key:', this.state.privateKey);
                                            this.setState({ isLoading: true });
                                            this.loadingData();
                                        }}
                                    >
                                        Sign in
                                </Button>
                            </form>
                        </Paper>

                    </main>
                    :<div style={{
                        width: '100vh',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ReactLoading type='spinningBubbles' color='red' height='20%' width='20%' />
                    </div>
                    
                }
            </div>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};
// const mapStateToProps = state=>{
//     return 
// }
export default connect()(withRouter(withStyles(styles)(SignIn)));