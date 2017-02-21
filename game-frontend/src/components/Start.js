import React, { Component } from 'react';
import logo from '../../public/assets/logo.png';
import '../App.css';
import channel from '../connection.js';
import Header from './Header.js';
import { Link } from 'react-router';

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
        <Link to='/image'>
          <button>Start challenge!</button>
        </Link>
        <button>Leaderboard</button>
      </div>
    );
  }
}

export default App;
