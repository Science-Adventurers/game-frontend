import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { Route, Router, browserHistory } from 'react-router';

const Routes = (props) =>
  <Router {...props}>
    <Route path="/" component={ App }/>
  </Router>

ReactDOM.render(
  <Routes history={ browserHistory }/>,
  document.getElementById('root')
);
