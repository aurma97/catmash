import { orderBy } from 'lodash';

export const catReducer = (state, action) => {
    const {cat, type} = action;
    switch(type){
        case 'ADD_VOTE':
            let catToUpdate = state.findIndex(item => {
                return item.id === cat.id
            })
            state[catToUpdate] = cat;
            localStorage.setItem('cats', JSON.stringify(state));
            return state;
        
        case 'ORDER_ASC':
            localStorage.setItem('cats', JSON.stringify(orderBy(state, ['score'], ['asc'])));
            return orderBy(state, ['score'], ['asc'])

        case 'ORDER_DESC':
            localStorage.setItem('cats', JSON.stringify(orderBy(state, ['score'], ['desc'])));
            return orderBy(state, ['score'], ['desc']);
        default:
            return state;  
    }
}