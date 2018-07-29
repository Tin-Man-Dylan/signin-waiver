import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Waiver from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './style.css';
import { Router } from 'react-router';
import routes from './routes';
import {Route, Switch, BrowserRouter } from 'react-router-dom'


ReactDOM.render(
	(
  <BrowserRouter>
    <Routes />

  </BrowserRouter>
), document.getElementById('root'));
//ReactDOM.render(<Waiver clearButton="true" />, document.getElementById('root'));
registerServiceWorker();
