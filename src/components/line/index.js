import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    line: {
        backgroundColor: '#f1f2f2',
        height: 1,
        width: '100%',
        marginBottom: 10
    },
}

class Line extends React.Component {

    constructor(props) {
        super(props)
        this.classes = this.props.classes
    }
    render() {
        return (
            <div>
                <div className={this.classes.line}/>
            </div>
        )
    }
}

Line.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default (withStyles(styles)(Line));