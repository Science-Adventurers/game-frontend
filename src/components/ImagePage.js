import React, { Component } from 'react';
import logo from '../../public/assets/logo.png';
import '../App.css';
import channel from '../connection.js';
import Header from './Header.js';
import { Link, browserHistory } from 'react-router'
import classnames from 'classnames';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      adventure: '',
      current_question:undefined,
      remaining_questions:undefined,
      isQuestionShowing: false,
      elapsed_time:undefined,
      answer: undefined,
      score: undefined
    };
  }

  componentDidMount(){
    channel.join()
      .receive("ok", resp => {
        channel.push("start-game", { category: "Mathematics" })
          .receive("ok", resp => {
            console.log(resp);
            if (resp.type === 'next-round') {
              this.setState({current_question: resp.current_question, remaining_questions: resp.remaining_questions, score: resp.score})
            } else {
              browserHistory.push(`/leaderboard/${resp.score}`)
              this.setState({score: resp.score})
            }
          })
          .receive("error",resp => {console.log(resp)})
       })
      .receive("error", resp => { console.log("Unable to join", resp) })
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

  selectAnswer(answer){
     this.setState({answer})
  }

  submitAnswer() {
    this.setState({
      isQuestionShowing:!this.state.isQuestionShowing,
      elapsed_time:Date.now()-this.state.timeTaken
    })

    channel.push('send-answer', {elapsed_time: this.state.elapsed_time, answer: this.state.answer})
      .receive("ok", resp => {
        if (resp.type === 'score') {
          browserHistory.push(`/leaderboard/${resp.score}`)
        } else {
          this.setState({current_question: resp.current_question, remaining_questions: resp.remaining_questions})
        }
      })
      .receive("error",resp => {console.log(resp)})
    // send elapsed_time and answer to socket....
  }

  render() {
    console.log(this.state);

    let question = this.state.current_question && this.state.current_question;
    console.log(question)
    let displayOptions = question && question.options.map(option => {

      let optionClasses = classnames("options", {
        "selected-option": option === this.state.answer
      });
      return (
        <li className={ optionClasses } onClick={ () => this.selectAnswer(option) } key={option}>
          {option}
        </li>
      )
    })
    return ( <div>

      {
        this.state.score &&
        <div className="App">
          <Header title={"title"} />
          <h3>Congratulations</h3>
          <h5>{this.state.score}</h5>
          <h5>{this.state.score}</h5>
          <h5>{this.state.score}</h5>
          <h5>{this.state.score}</h5>
          <p>HELLOOO</p>
          <Link to='/'>Home</Link>
        </div>
      }
      {
        !this.state.isQuestionShowing && this.state.current_question &&
        <div className="App">
          <Header title={"title"} />
          <p className="question">
            Can you find this?
          </p>
          <img className="api-image" src={ question.image_url } alt="sg"/>
          <button
            className="big-button"
            onClick={()=>{this.setState({isQuestionShowing:!this.state.isQuestionShowing,elapsed_time:Date.now()})}}>
            Found it!
          </button>
        </div>
      }

      {
        this.state.isQuestionShowing && this.state.current_question &&
        <div className="App">
          <Header title={"title"} />
          <h3 className="question">{this.generateQuestion(question.topic, question.name)}</h3>
          <img src={question.image_url} alt="sg"/>
          <ul className="option-list">
            {displayOptions}
          </ul>
          <button className="big-button" onClick={()=> this.submitAnswer() }>Submit</button>
        </div>
      }
      </div>
    )
  }
}

export default App;
