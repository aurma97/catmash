import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CatContextProvider from '../store/contexts/CatContext';
import NavbarApp from '../components/layout/Navbar';
import NotFound from '../components/NotFound';
import Votes from '../components/cats/Votes';
import Cats from '../components/cats/Cats';

const Router = () => (
    <BrowserRouter>
    <NavbarApp/>
        <Switch>
            <Route path='/' exact component={Votes}/>
            <Route path='/cats' exact component={Cats}/>
            <Route exact component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default Router;