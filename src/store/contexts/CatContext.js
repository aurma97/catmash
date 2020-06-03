import React, { createContext, useEffect, useReducer } from 'react';
import data from '../data.json';
import { catReducer } from '../reducers/CatReducer';

export const CatContext = createContext();

// Context to manage Cat store with score...

const CatContextProvider = (props) => {
    let [cats, dispatch_cat] = useReducer(catReducer, [], ()=>{
        const localData = localStorage.getItem('cats');
        let tmp = [];
        if (!localData){
            for (let i = 0; i < data.images.length; i++) {
                const cat = data.images[i];
                tmp.push({
                    ...cat,
                    score: Math.floor(Math.random() * 100)
                });
            }

            return tmp;
        }else if (localData){
            return JSON.parse(localData);
        }
    });

    // Shuffle the array
    const shuffle = (array) => {
        let counter = array.length;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }

    return (
        <CatContext.Provider value={{cats, shuffle, dispatch_cat}}>
            {props.children}
        </CatContext.Provider>
    );
}
export default CatContextProvider;