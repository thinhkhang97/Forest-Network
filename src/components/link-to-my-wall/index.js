import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    menuContainer: {
        width: 230,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 3,
        position: 'fixed',
    },
    avatar: {
        height: 90,
        width: 90,
        borderRadius: '50%',
        borderColor: 'white',
        border: '2px solid #fff',
        objectFit: 'cover',
    },
    info:{
        fontSize: 12,
        color: 'white',
        lineHeigth: 5,
        paddingLeft: 20
    }

};

class LinkToMyWall extends React.Component {

    constructor(props) {
        super(props)
        this.classes = this.props.classes
    }
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };
    componentDidMount() {
        //console.log('IMG Source',this.arrayBufferToBase64(this.props.imageBase64));
    }
    render() {
        return (
            <div>
                <div style={{backgroundImage: 'url('+'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREwFRD2j6yUNsjL43Xv76Rk3xQx4GpTLenFMnZOWB934l-v24C'+')'}}
                     className={this.classes.menuContainer}>
                    <div>
                        {/* <img className={this.classes.avatar} src='https://i.ytimg.com/vi/nUioInZvGWo/maxresdefault.jpg'/> */}
                        <img className={this.classes.avatar} src={`data:image/jpeg;base64,${this.arrayBufferToBase64(this.props.imageBase64)}`}/>
                    </div>

                    <div className={this.classes.info}>
                        <h5>{this.props.userName}</h5>
                        <div>Follower: {this.props.numberFollowers}</div>
                        <div>Following: {this.props.numberFollowings}</div>
                        <div>Money: {this.props.balance}</div>
                    </div>
                </div>
            </div>
        )
    }
}

LinkToMyWall.propTypes = {
    classes: PropTypes.object.isRequired,
    avatarImage: PropTypes.object.isRequired,
    backgroundImage: PropTypes.object.isRequired,

};

export default withStyles(styles)(LinkToMyWall);