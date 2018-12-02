import React from 'react';
import {connect} from 'react-redux';

class LinkToMyWall extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="profile-card">
                <img src="images/bitcoin.jpg" alt="user" className="profile-photo" />
                <h5><a href="timeline.html" className="text-white">Sarah Cruiz</a></h5>
                <a href="#" className="text-white"><i className="ion ion-android-person-add" /> 1,299 followers</a>
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
}

export default LinkToMyWall;