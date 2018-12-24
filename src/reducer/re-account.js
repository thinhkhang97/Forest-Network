const initState = null;

export const account = (state=initState, action) => {
    switch (action.type) {
        case 'GET_INFO': return action.data;
        default: return state;
    }
}