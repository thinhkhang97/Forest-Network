import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from '../../components/navigation';
import CoverWall from '../../components/cover-wall';
import PostInput from '../../components/post-input';
import Post from '../../components/post';
import EditMenu from '../../components/edit-menu';
import EditProfile from '../../components/edit-profile';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    myWallContainer: {
        flex: 1,
        color: '#939598',
        position: 'relative'
    },
    myWallContent: {
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    contentContainer:{
        display: 'flex',
    },
    partLeft: {
        width: '25%',
    },
    partMid: {
        width: '55%',
        paddingLeft: 10,
        paddingRight: 10
    },
    partRight: {
        width: '20%',
    },
    line: {
        backgroundColor: '#f1f2f2',
        height: 1,
        width: '100%',
        marginBottom: 10
    },
}

class MyWall extends React.Component {

    constructor(props) {
        super(props)
        this.classes = this.props.classes;
    }
    render() {
        return (
            <div className={this.classes.myWallContainer}>
                <Navigation/>
                <div className={this.classes.myWallContent}>
                    <CoverWall/>
                    <div className={this.classes.contentContainer}>
                        <div className={this.classes.partLeft}>
                            <h3 style={{textAlign: 'center', color: '#27aae1'}}>Nancy</h3>
                            <p style={{textAlign: 'center'}}>Everything is fine</p>

                            <EditMenu/>
                        </div>
                        <div className={this.classes.partMid}>
                            {/*<PostInput/>*/}
                                {/*<div className={this.classes.line}/>*/}
                            {/*<Post/>*/}
                                {/*<div className={this.classes.line}/>*/}
                            {/*<Post/>*/}
                                {/*<div className={this.classes.line}/>*/}
                            {/*<Post/>*/}
                            <EditProfile/>
                        </div>
                        <div className={this.classes.partRight}>
                            {/*part right*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

MyWall.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
}

export default (withStyles(styles)(MyWall));