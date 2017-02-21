import React, { Component } from 'react';
import logo from '../../public/assets/logo.png';
import '../App.css';
import channel from '../connection.js';
import Header from './Header.js';
import { Link } from 'react-router'

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
        <img src={ logo } alt="sg"/>
        <p className="App-intro">
          Can you find this?
        </p>
        <Link to='/question'>
          <button>Found it!</button>
        </Link>
      </div>
    );
  }
}

export default App;
