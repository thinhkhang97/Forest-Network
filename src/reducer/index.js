import {combineReducers} from 'redux';
import {myWallPage} from './re-myWallPage';
import {posts} from './re-post';
import {follows} from './re-friend';
import {account} from './re-account';
import {newsfeed} from './re-newsfeed';
import {recommendUsers} from './re-recommendUsers';
import {wall} from './re-wall';
export default combineReducers({
    myWallPage,
    posts,
    follows,
    account,
    newsfeed,
    recommendUsers,
    wall
})