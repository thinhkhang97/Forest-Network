import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import EditBasicInfo from './edit-basic-info';
import ChangePassword from './change-password';
import {Link} from 'react-router-dom';
class EditProfile extends React.Component {

    render() {
        return (
            <div>
                <EditBasicInfo/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    page: state.myWallPage
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps)(EditProfile);