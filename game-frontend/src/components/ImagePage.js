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
      adventure: '',
      question:undefined,
      isQuestionShowing: false,
      questionNum: 0
    };
  }
  selectAdventure(adventure){
     this.setState({adventure})
  }
  generateQuestion(topic,name){
    name=name.split(',')[0];
    if(topic=="who"){
      return `Who built the ${name}?`
    }else if(topic=="when"){
      return `When was the ${name} built?`
    }else{
      return `Where was the ${name} built?`
    }
  }
  componentDidMount(){
    channel.join()
      .receive("ok", resp => {
        channel.push("get-random-question", {category: "Space Technology"})
          .receive("ok", resp => { this.setState({question:resp}) })
          .receive("error",resp => {console.log(resp)})
       })
      .receive("error", resp => { console.log("Unable to join", resp) })
  }
  render() {
    console.log(this.state);

    let question = this.state.question && this.state.question.question;
    let displayOptions = question && question.options.map( option => {
      return (
        <li onClick={ () => this.selectAnswer(option) } key={option}>
          {option}
        </li>
      )
    } )
    return ( <div>

      {!this.state.isQuestionShowing && this.state.question &&
        <div className="App">
          <Header title={"title"} />
          <img src={ question.image_url } alt="sg"/>
          <p className="App-intro">
            Can you find this?
          </p>
            <button onClick={(e)=>{this.setState({isQuestionShowing:!this.state.isQuestionShowing})}} >Found it!</button>
        </div>
      }

      {
        this.state.isQuestionShowing && this.state.question &&
        <div>
          <Header title={"title"} />
          <h3>{this.generateQuestion(question.topic, question.name)}</h3>
          <img src={question.image_url} alt="sg"/>
          <ul className="option-list">
            {displayOptions}
          </ul>
          <button onClick={(e)=>{this.setState({isQuestionShowing:!this.state.isQuestionShowing})}}>Submit</button>
        </div>
      }
      </div>
    )
  }
}

export default App;
