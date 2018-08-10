import React from 'react';
//import { Route } from 'react-router';
import Waiver from './App';
import Signin from './Signin';
import Insta from './Insta';
import {Route, Switch, BrowserRouter } from 'react-router-dom'

var hashHistory = Route.hashHistory;

const Routes = () => (
  <main>
      	<Switch>
      <Route exact path='/' component={Signin}/>
      <Route path='/waiver/:name' component={Waiver} />
      <Route path='/insta/' component={Insta} />
       <Route path='*' component={Signin}/>

      </Switch>
  </main>
)

export default Routes