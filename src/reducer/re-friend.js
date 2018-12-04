// Follow on newsfeed

const initState = [
    {
        name: 'Nguyen Thinh Khang',
        avatar: 'K'
    },
    {
        name: 'Nguyen Huu Linh',
        avatar: 'L'
    },
    {
        name: 'Le Xuan Nam',
        avatar: 'N'
    }
];

export const follows = (state=initState, action) => {
    switch (action.type) {
        case 'FOLLOW_FRIEND': return 'do something here in the future';
        default: return state;
    }
}