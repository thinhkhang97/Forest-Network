import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import swal from '@sweetalert/with-react';
import FileBase64 from 'react-file-base64';
import {changeImage} from '../../services'
const styles = {
    root: {
        flexGrow: 1,
    },
    menuContainer: {
        width: '100%',
        height: 300,
        maxHeight: '30%',
        minHeight: '20%',
        position: 'relative',
        borderRadius: 5,
    },
    avatar: {
        height: 200,
        width: 200,
        backgroundColor: 'white',
        borderRadius: '50%',
        borderColor: 'white',
        border: '10px solid #fff',
        objectFit: 'cover',
        position: 'absolute',
        bottom: -10,
    },
    menuTimeline: {
        height: 55,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        bottom: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
    },
    button:{
      color:'white',
        '&:hover':{
          color:'#337ab7',
        },
        textTransform: 'capitalize'
    },
    tab3: {
        width: '25%',
        height: '100%'
    },
    tab9: {
        width: '75%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    listInline: {

    },
    numberFollow: {
        color: 'white'
    },
    primaryButton: {
        backgroundColor: '#27aae1',
        borderRadius: 18,
        textTransform: 'capitalize',
        marginLeft: 10,
        marginRight: 10,
        '&:hover': {
            backgroundColor: '#2e6da4'
        }
    }

};

class CoverWall extends React.Component {

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    constructor(props) {
        super(props)
        this.classes = this.props.classes
        this.state = {
            imgData: []
        }
    }

    getFiles(files){
        // console.log('FILE IMAGE',files);
        if(files.file.size>1024*20) {
            swal('Oops???','File is bigger than 20kb', 'error');
        } else {
            // console.log(files.base64.replace('data:image/jpeg;base64,',''))
            this.setState({ imgData: files.base64.replace('data:image/jpeg;base64,','') });
            swal('Ask','Do you want to change your avatar?').then(value=>{
                if(value) {
                    const pk = localStorage.getItem('privateKey');
                    changeImage(pk, this.state.imgData, this.props.account.sequence+1).then(r=>{
                        if(r.data.success==='OK') {
                            swal('Great!!!','Change avatar successfully', 'success');
                        }else {
                            swal('Oops???','Change avatar fail','error');
                        }
                    })
                }
            });
        }
    }

    render() {
        return (
            <div className={this.classes.root}>
                <div style={{backgroundImage: 'url('+'https://www.independent.ng/wp-content/uploads/2018/09/Forest.jpg'+')'}}
                     className={this.classes.menuContainer}>
                    <div className={this.classes.menuTimeline}>
                        <div className={this.classes.tab3}>

                        </div>
                        <div className={this.classes.tab9}>
                            <div>
                                <Link to='/mywall/timeline'>
                                    <Button className={this.classes.button}
                                    style={{visibility: this.props.isHidden? 'hidden':'visible'}}
                                    onClick={()=>{
                                        console.log('click');
                                        this.props.dispatch({type:'GET_PAGE', page: 'timeline'})
                                    }}
                                    >
                                        Timeline
                                    </Button>
                                </Link>
                                <Link to='/mywall/edit-profile'>
                                    <Button className={this.classes.button}
                                    style={{visibility: this.props.isHidden? 'hidden':'visible'}}
                                    onClick={()=>{
                                        console.log('click');
                                        this.props.dispatch({type:'GET_PAGE', page: 'edit-profile'})
                                    }}>
                                        Edit profile
                                    </Button>
                                </Link>
                            </div>
                            <div className={this.classes.numberFollow}>
                                {this.props.followers != null ? this.props.followers : 1000} followers
                                <Button 
                                style={{visibility: this.props.isMe?'hidden':'visible'}}
                                variant='contained' color='primary' className={this.classes.primaryButton}>
                                    {this.props.isFollowing?'Following':'Follow'}
                                </Button>
                                <Button 
                                style={{visibility: this.props.isMe?'hidden':'visible'}}
                                onClick={()=>this.props.onClickPayment()}
                                variant='contained' color='primary' className={this.classes.primaryButton}>
                                    Payment
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div style={{marginLeft: 20}}>
                        <img className={this.classes.avatar} src={
                            this.props.imageBase64!=null?
                            `data:image/jpeg;base64,${this.props.imageBase64}`:
                            'https://i.pinimg.com/originals/ab/e9/2f/abe92f535382cba9615e8767c21a6304.jpg'
                            }
                            onClick={()=>{
                                if(this.props.isMe)
                                swal(
                                    <div>
                                        <div>Do you want to change your avatar?</div>
                                        <FileBase64
                                            multiple={ false }
                                            onDone={ this.getFiles.bind(this) } />
                                    </div>
                                )
                            }}/>
                    </div>
                </div>
            </div>
        )
    }
}

CoverWall.propTypes = {
    classes: PropTypes.object.isRequired,
    avatarImage: PropTypes.object.isRequired,
    backgroundImage: PropTypes.object.isRequired,

};

const mapStateToProps = state=>{
    return {
        account: state.account
    }
}

export default connect(mapStateToProps)(withStyles(styles)(CoverWall));