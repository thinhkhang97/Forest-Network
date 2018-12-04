const initState = 'basic-info';

export const myWallPage = (state=initState, action) => {
    switch (action.type) {
        case 'GET_PAGE': return action.page;
        default: return state;
    }
}