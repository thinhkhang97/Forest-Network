// An example for action
const ADD_POST = 'ADD_POST';
const FOLLOW_FRIEND= 'FOLLOW_FRIEND'

const addPost = (data1, data2) => ({
    type: ADD_POST,
    data1,
    data2
})

const followFriend = (data1, data2) => ({
    type: FOLLOW_FRIEND,
    data1,
    data2
})