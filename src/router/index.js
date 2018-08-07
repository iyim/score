import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent.js';

const AppLayout = asyncComponent(() => import('../layout/PrimaryLayout/index'));
// import AppLayout from '../components/PrimaryLayout/index';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/score" component={AppLayout} />
            <Redirect to="/score" />
        </Switch>
    </BrowserRouter>
);

export default App;