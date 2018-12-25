const initState = [];

export const newsfeed = (state=initState, action) => {
    switch (action.type) {
        case 'ADD_POST_NEWSFEED': return action.data;
        default: return state;
    }
}