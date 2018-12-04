import {combineReducers} from 'redux';
import {myWallPage} from './re-myWallPage';
import {posts} from './re-post';
import {follows} from './re-friend'
export default combineReducers({
    myWallPage,
    posts,
    follows
})