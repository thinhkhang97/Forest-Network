import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import EditBasicInfo from './edit-basic-info';
import ChangePassword from './change-password';
class EditProfile extends React.Component {

    render() {
        return (
            // <EditBasicInfo/>
            <ChangePassword/>
        )
    }
}

// EditProfile.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
}

export default (EditProfile);