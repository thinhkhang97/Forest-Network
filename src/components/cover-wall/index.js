import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    },
    menuContainer: {
        width: 1140,
        height: 500,
        maxHeight: '50%',
        minHeight: '20%',
        position: 'relative'
    },
    avatar: {
        height: 200,
        width: 200,
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
        alignItems: 'center'
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

    constructor(props) {
        super(props)
        this.classes = this.props.classes
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
                                <Button className={this.classes.button}>
                                    Timeline
                                </Button>
                                <Button className={this.classes.button}>
                                    Edit profile
                                </Button>
                                <Button className={this.classes.button}>
                                    About
                                </Button>
                            </div>
                            <div className={this.classes.numberFollow}>
                                1,299 people following her
                                <Button variant='contained' color='primary' className={this.classes.primaryButton}>
                                    Add friend
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className={this.classes.avatar} src='https://i.ytimg.com/vi/nUioInZvGWo/maxresdefault.jpg'/>
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

export default withStyles(styles)(CoverWall);