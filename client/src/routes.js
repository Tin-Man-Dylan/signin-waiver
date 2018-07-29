import React from 'react';
//import { Route } from 'react-router';
import Waiver from './App';
import Signin from './Signin';
import {Route, Switch, BrowserRouter } from 'react-router-dom'

var hashHistory = Route.hashHistory;

const Routes = () => (
  <main>
      	<Switch>
      <Route exact path='/' component={Signin}/>
      <Route path='/waiver' component={Waiver} />
       <Route path='*' component={Signin}/>

      </Switch>
  </main>
)

export default Routes