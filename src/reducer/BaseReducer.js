const initState = 'data';

export const ReducerName = (state=initState, action) => {
    switch (action.type) {
        case 'TYPE_NAME': return 'something';
        default: return state;
    }
}