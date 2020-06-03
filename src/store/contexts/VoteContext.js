import React, { createContext, useEffect, useReducer } from 'react';
import { voteReducer } from '../reducers/VoteReducer';

export const VoteContext = createContext();

// Context to manage vote and user who vote;

const VoteContextProvider = (props) => {
    const [votes, dispatch_vote] = useReducer(voteReducer, [], ()=>{
        const localData = localStorage.getItem('votes');
        
        return localData ? JSON.parse(localData) : []
    });

    useEffect(()=>{
        localStorage.setItem('votes', JSON.stringify(votes));
    }, [votes])

    return (
        <VoteContext.Provider value={{votes, dispatch_vote}}>
            {props.children}
        </VoteContext.Provider>
    );
}
export default VoteContextProvider;