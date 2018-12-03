import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from '../../components/navigation';
import CoverWall from '../../components/cover-wall';
import PostInput from '../../components/post-input';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    myWallContainer: {
        flex: 1,
    },
    myWallContent: {
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    contentContainer:{
        display: 'flex',
    },
    partLeft: {
        width: '20%',
        backgroundColor: 'red'
    },
    partMid: {
        width: '60%',
        backgroundColor: 'green'
    },
    partRight: {
        width: '20%',
        backgroundColor: 'blue'
    }
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
                            Part 1
                        </div>
                        <div className={this.classes.partMid}>
                            <PostInput/>
                        </div>
                        <div className={this.classes.partRight}>
                            part 2
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