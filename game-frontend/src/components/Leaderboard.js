import React, { Component } from 'react';
import channel from '../connection.js';
import Header from './Header.js';

class Leaderboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      score: '9',
      position: '3',
      dailyLeaderboard: { // I am notsure what data we would display here, it is temporary
        1:{teamname: "Winners"}
      }
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header title={"title"} />
        <h3>Congratualations</h3>
        <h5>{this.state.score}</h5>
        <h5>{this.state.position}</h5>
      </div>
    );
  }
}

export default Leaderboard;
