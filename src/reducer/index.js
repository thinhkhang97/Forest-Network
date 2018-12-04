import {combineReducers} from 'redux';
import {myWallPage} from './re-myWallPage';
import {posts} from './re-post';
export default combineReducers({
    myWallPage,
    posts
})