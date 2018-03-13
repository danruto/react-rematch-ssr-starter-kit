import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import './App.css';

// Dynamic Routing via React Router DOM
const App = () => (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
);

export default App;
