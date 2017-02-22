import React, { Component } from 'react';
import channel from '../connection.js';
import Header from './Header.js';
import { Link } from 'react-router'


class Leaderboard extends Component {
  constructor(props){
    super(props);
  }


  render() {
    let score = this.props.params.score;
    console.log(this.state);
    return (
      <div className="App">
        <Header title={"title"} />
        <h3 className="question">Congratualations</h3>
        <h5 className="final-score">{score}</h5>
        <Link to="/" className="big-button">
          Home
        </Link>


      </div>
    );
  }
}

export default Leaderboard;
