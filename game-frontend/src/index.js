import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Start from './components/Start';
import './index.css';
import { Route, Router, browserHistory } from 'react-router';

const Routes = (props) =>
  <Router {...props}>
    <Route path="/" component={ App }/>
    <Route path="/start" component={ Start }/>
  </Router>

ReactDOM.render(
  <Routes history={ browserHistory }/>,
  document.getElementById('root')
);
