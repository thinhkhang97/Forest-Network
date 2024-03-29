import React from 'react';
import CoverWall from './components/cover-wall';
import SignIn from './components/authentication/login'
import Register from './components/authentication/register'
import Navigation from './components/navigation/index'
import LinkToMyWall from './components/link-to-my-wall/index'
import Post from './components/post/index'
import PostInput from './components/post-input/index'
import EditProfile from './components/edit-profile';
import EditMenu from './components/edit-menu'
import MyWall from './container/mywall';
import NewsFeed from './container/newsfeed';
import Follow from "./components/follow";

class Demo extends React.Component {
    render(){
        return(
           <div>
               {/*<SignIn/>*/}
               {/*<Register/>*/}
               {/*<Navigation/>*/}
               {/*<LinkToMyWall/>*/}
               {/*<Post/>*/}
               {/*<PostInput/>*/}
               {/*<CoverWall/>*/}
               {/*<EditMenu/>*/}
               {/*<EditProfile/>*/}
                {/*<MyWall/>*/}
               {/* <NewsFeed/> */}
               {/*<Follow/>*/}
           </div>
        )
    }
}

export default Demo;
