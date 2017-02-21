import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Start from './components/Start';
import Question from './components/Question';
import Leaderboard from './components/Leaderboard.js';
import './index.css';
import { Route, Router, browserHistory } from 'react-router';

const Routes = (props) =>
  <Router {...props}>
    <Route path="/" component={ App }/>
    <Route path="/start" component={ Start }/>
    <Route path="/question" component={ Question }/>
    <Route path="/leaderboard" component={ Leaderboard }/>
  </Router>

ReactDOM.render(
  <Routes history={ browserHistory }/>,
  document.getElementById('root')
);
