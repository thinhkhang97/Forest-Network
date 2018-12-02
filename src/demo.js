import React from 'react';
import CoverWall from './components/cover-wall';
import SignIn from './components/authentication/login'
import Register from './components/authentication/register'
import Navigation from './components/navigation/index'
import LinkToMyWall from './components/link-to-my-wall/index'
import Post from './components/post/index'
import PostInput from './components/post-input/index'
class Demo extends React.Component {
    render(){
        return(
           <div>
               <SignIn/>
               <Register/>
               <CoverWall/>
               <Navigation/>
               <LinkToMyWall/>
               <Post/>
               <PostInput/>
           </div>
        )
    }
}

export default Demo;
