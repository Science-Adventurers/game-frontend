import React, { Component } from 'react';
import logo from '../../public/assets/logo.png'; //temporary
import channel from '../connection.js';
import Header from './Header.js';

class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      img: 'logo', //temporary
      question: 'SOMEEETHING',
      options: {
        a: 'dgd',
        b: 'safdhs',
        c: 'dsg',
        d: 'dssg'
      },
      answer:""
    };
  }
  selectAnswer(answer){
     this.setState({answer})
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Header title={"title"} />
        <h3>{this.state.question}</h3>
        <img src={logo} alt="sg"/>
        <ul className="option-list">
          <li onClick={ () => this.selectAnswer(this.state.options.a) }>
            {this.state.options.a}
          </li>
          <li onClick={ () => this.selectAnswer(this.state.options.b) }>
            {this.state.options.b}
          </li>
          <li onClick={ () => this.selectAnswer(this.state.options.c) }>
            {this.state.options.c}
          </li>
          <li onClick={ () => this.selectAnswer(this.state.options.d) }>
            {this.state.options.d}
          </li>
        </ul>
      </div>
    );
  }
}

export default Question;
