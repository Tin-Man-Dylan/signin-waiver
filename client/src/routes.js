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
      <Route exact path='/signin' component={Signin}/>
      <Route path='/waiver/:lastname/:firstname' component={Waiver} />
      <Route path='/' component={Insta} />
       <Route path='*' component={Insta}/>

      </Switch>
  </main>
)

export default Routes