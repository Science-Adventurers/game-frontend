import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Question from './components/Question';
import './index.css';
import { Route, Router, browserHistory } from 'react-router';

const Routes = (props) =>
  <Router {...props}>
    <Route path="/" component={ App }/>
    <Route path="/question" component={ Question }/>
  </Router>

ReactDOM.render(
  <Routes history={ browserHistory }/>,
  document.getElementById('root')
);
