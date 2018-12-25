const initState = null;

export const wall = (state=initState, action) => {
    switch (action.type) {
        case 'GET_ACCOUNT_WALL': return action.data;
        default: return state;
    }
}