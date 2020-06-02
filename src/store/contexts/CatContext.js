import React, { createContext, useState } from 'react';

export const CatContext = createContext();

const CatContextProvider = (props) => {
    const [cats, setCat] = useState([]);


    return (
        <CatContext.Provider value={{cats}}>
            {props.children}
        </CatContext.Provider>
    );
}
export default CatContextProvider;