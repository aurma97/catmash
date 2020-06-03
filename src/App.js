import React from 'react';
import Router from './config/Router';
import CatContextProvider from './store/contexts/CatContext';
import VoteContextProvider from './store/contexts/VoteContext';

const App = () => {
  return (
    <CatContextProvider>
      <VoteContextProvider>
        <Router/>  
      </VoteContextProvider>
    </CatContextProvider>
  )
}

export default App;
