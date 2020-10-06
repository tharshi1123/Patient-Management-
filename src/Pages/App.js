import React from 'react';
import publicRoute from '../Route/PublicRoutes';
import {   Link,Route, BrowserRouter, Switch } from 'react-router-dom';

const App = ()=> {
  const publicRoutes = (Routes, index) => {
    return (
      <Route
        key={index}
        path={Routes.path}
        component={Routes.component}
        exact={Routes.exact}
       
      />
    );
  };
    return (
      <BrowserRouter>
        <Switch>
          {publicRoute.map((Route, index) => publicRoutes(Route, index))}
        </Switch>
      </BrowserRouter>
    );
  }
export default App;