import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    menuContainer: {
        width: 300,
        height: 150,
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
        color: 'gray',
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
        console.log(window.btoa(binary));
        return window.btoa(binary);
    };
    showImg(img) {
        console.log(img)
        return img;
    }
    componentDidMount() {
        // console.log('IMG Source',this.props.imageBase64.toString());
    }
    render() {
        return (
            <div>
                <div style={{backgroundImage: 'url('+'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREwFRD2j6yUNsjL43Xv76Rk3xQx4GpTLenFMnZOWB934l-v24C'+')'}}
                     className={this.classes.menuContainer}>
                    <div>
                        {/* <img className={this.classes.avatar} src='https://i.ytimg.com/vi/nUioInZvGWo/maxresdefault.jpg'/> */}
                        <img className={this.classes.avatar} 
                        src={
                            this.props.imageBase64?
                            `data:image/jpg;base64,${this.props.imageBase64}`:
                            'https://i.pinimg.com/originals/ab/e9/2f/abe92f535382cba9615e8767c21a6304.jpg'
                            }/>
                    </div>

                    <div className={this.classes.info}>
                        <h5 style={{fontSize: 14}}>{this.props.userName != null? this.props.userName : 'Nancy'}</h5>
                        <div>Follower: {this.props.numberFollowers != null ? this.props.numberFollowers : 100}</div>
                        <div>Following: {this.props.numberFollowings != null ? this.props.numberFollowings : 1000}</div>
                        <div>Money: {this.props.balance != null ? this.props.balance : 123878923} CELL</div>
                        <div>Energy: 48529 OXY</div>
                        <div>Sequece: {this.props.sequence != null ? this.props.sequence : 145}</div>
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