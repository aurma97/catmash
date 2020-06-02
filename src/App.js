import React from 'react';
import Router from './config/Router';
import CatContextProvider from './store/contexts/CatContext';

const App = () => {
  return (
    <CatContextProvider>
      <Router/>  
    </CatContextProvider>
  )
}

export default App;
