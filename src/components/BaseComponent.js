import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    styleName:{}
}

class BaseComponent extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

BaseComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(BaseComponent));