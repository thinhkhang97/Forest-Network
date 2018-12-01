import React from 'react';
import {connect} from 'react-redux';

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

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseComponent);