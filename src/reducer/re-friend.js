// Follow on newsfeed

const initState = [
    {
        name1: 'Nguyen Thinh Khang',
        avatar1: 'K'
    },
    {
        name1: 'Nguyen Huu Linh',
        avatar1: 'L'
    },
    {
        name1: 'Le Xuan Nam',
        avatar1: 'N'
    }
];

export const follows = (state=initState, action) => {
    switch (action.type) {
        case 'FOLLOW_FRIEND': return 'do something here in the future';
        default: return state;
    }
}