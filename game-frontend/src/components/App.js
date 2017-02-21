import React, { Component } from 'react';
import logo from '../../public/assets/logo.png';
import '../App.css';
import channel from '../connection.js';
import Header from './Header.js';

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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Science Adventurers</h2>
        </div>
        <p className="App-intro">
          Pick your challenge!
        </p>
        <ul className="challenge-list">
          <li onClick={ () => this.selectAdventure("Space") }>
            Space
          </li>
          <li onClick={ () => this.selectAdventure("Time") }>
            Time
          </li>
          <li onClick={ () => this.selectAdventure("Energy") }>
            Energy
          </li>
          <li onClick={ () => this.selectAdventure("Flight") }>
            Flight
          </li>
          <li onClick={ () => this.selectAdventure("Medicine") }>
            Medicine
          </li>
        </ul>
        <label>Name:</label>
        <input type="text" name="team-name" onChange={ (e) => this.setState({name: e.target.value})} value={ this.state.name }/>
        <button>Start challenge</button>
      </div>
    );
  }
}

export default App;
