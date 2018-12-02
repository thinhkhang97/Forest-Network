import React from 'react';
import {connect} from 'react-redux';
import SignIn from './components/authentication/login'
import Register from './components/authentication/register'
import Navigation from './components/navigation/index'
import LinkToMyWall from './components/link-to-my-wall/index'
import Post from './components/post/index'
import PostInput from './components/post-input/index'
class Demo extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <PostInput/>
                <Post/>
                <LinkToMyWall/>
                <Navigation/>
                <SignIn/>
                <Register/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
}

export default (Demo);