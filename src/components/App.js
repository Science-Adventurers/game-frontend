import React, { Component } from 'react';
import logo from '../../public/assets/logo.png';
import '../App.css';
import channel from '../connection.js';
import Header from './Header.js';
import { Link } from 'react-router'

import space from '../../public/assets/rocket-icon.svg';
import time from '../../public/assets/time-icon.svg';
import energy from '../../public/assets/energy-icon.svg';
import flight from '../../public/assets/flight-icon.svg';
import medicine from '../../public/assets/medicine-icon.svg';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      adventure: ''
    };
  }
  selectAdventure(adventure){
     this.setState({adventure})
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header title={"title"} />
        <h1 className="main-title">Science Adventurers</h1>
        <p className="App-intro">
          Pick your challenge!
        </p>
        <div className="list-container">
          <ul className="challenge-list list-style">
            <li className="space-link links" onClick={ () => this.selectAdventure("Space") }>
              <img className="icons" src={ space }/>
            </li>
            <li className="time-link links" onClick={ () => this.selectAdventure("Time") }>
              <img className="icons" src={ time }/>
            </li>
            <li className="energy-link links" onClick={ () => this.selectAdventure("Energy") }>
              <img className="icons" src={ energy }/>
            </li>
            <li className="flight-link links" onClick={ () => this.selectAdventure("Flight") }>
              <img className="icons" src={ flight }/>
            </li>
            <li className="medicine-link links" onClick={ () => this.selectAdventure("Medicine") }>
              <img className="icons" src={ medicine }/>
            </li>
          </ul>
        </div>
        <div className="name-input">
          <label className="label">Team Name:</label>
          <input className="text-input" type="text" name="team-name" onChange={ (e) => this.setState({name: e.target.value})} value={ this.state.name }/>
          <Link className="page-link" to='/start'>
            <button className="big-button">Explore!</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
