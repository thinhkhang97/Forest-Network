const initState = null;

export const recommendUsers = (state=initState, action) => {
    switch (action.type) {
        case 'GET_RECOMMEND_USERS': return action.data;
        default: return state;
    }
}