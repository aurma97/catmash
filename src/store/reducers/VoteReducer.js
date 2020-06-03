export const voteReducer = (state, action) => {
    const {cat, cat_unvoted, username, type} = action;
    switch(type){
        case 'ADD_VOTE':
            let store = [];
            if (state && state.length){
                store = [{
                    username,
                    cats_voted: [...state[0].cats_voted, cat], 
                    cats_unvoted: [...state[0].cats_unvoted, cat_unvoted], 
                    created_at: (new Date())
                }]
            }else{
                store = [{
                    username,
                    cats_voted: [cat], 
                    cats_unvoted: [cat_unvoted],
                    created_at: (new Date())
                }]
            }
            localStorage.setItem('votes', JSON.stringify(store));
            return store
        
        default:
            return state;  
    }
}