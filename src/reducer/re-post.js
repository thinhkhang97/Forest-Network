// Post on newsfeed

const initState = [
    {
        name: 'Nguyen Thinh Khang',
        avatar: 'K',
        datePost: 'December 2, 2018',
        status: `Hom nay la mot ngay dep troi de chup anh`,
        comments: [
            {
                name: 'Nguyen Huu Linh',
                avatar: 'K',
                content: 'Hello'
            },
            {
                name: 'Nguyen Huu Linh',
                avatar: 'K',
                content: 'Hello'
            },
            {
                name: 'Nguyen Thinh Khang',
                avatar: 'K',
                content: 'How are u?'
            }
        ]
    },
    {
        name: 'Nguyen Thinh Khang',
        avatar: 'K',
        datePost: 'December 2, 2018',
        status: `This impressive paella is a perfect party dish and a fun meal to cook 
        together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
        comments: [
            {
                name: 'Nguyen Huu Linh',
                avatar: 'K',
                content: 'Hello'
            },
            {
                name: 'Nguyen Huu Linh',
                avatar: 'K',
                content: 'Hello'
            },
            {
                name: 'Nguyen Thinh Khang',
                avatar: 'K',
                content: 'How are u?'
            }
        ]
    }
];

export const posts = (state=initState, action) => {
    switch (action.type) {
        case 'ADD_POST': return 'do something here in the future';
        default: return state;
    }
}