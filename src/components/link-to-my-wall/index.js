import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    menuContainer: {
        width: 150,
        height: 100,
        position: 'relative'
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: '50%',
        borderColor: 'white',
        border: '10px solid #fff',
        objectFit: 'cover',
        position: 'absolute',
        bottom: -10,
    }

};

class LinkToMyWall extends React.Component {

    constructor(props) {
        super(props)
        this.classes = this.props.classes
    }
    render() {
        return (
            <div className={this.classes.root}>
                <div style={{backgroundImage: 'url('+'https://www.independent.ng/wp-content/uploads/2018/09/Forest.jpg'+')'}}
                     className={this.classes.menuContainer}>
                    <div>
                        <img className={this.classes.avatar} src='https://i.ytimg.com/vi/nUioInZvGWo/maxresdefault.jpg'/>
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