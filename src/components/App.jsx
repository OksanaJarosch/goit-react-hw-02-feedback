import {Component} from "react";
import {Section} from "./Section/Section"


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleGood = () => {
    this.setState(prevState =>{
      return{
        good: prevState.good + 1,
      }
    })
  };

  handleNeutral = () => {
    this.setState(prevState => {
      return{
      neutral: prevState.neutral +1,
      }
      })

  };

  handleBad = () => {
    this.setState(prevState => {
    return {
      bad: prevState.bad + 1,
    }
    })
  };

  render(){
    return (
      <>
      <Section title="Please leave feedback" stats={this.state} onGood={this.handleGood} onNeutral={this.handleNeutral} onBad={this.handleBad}></Section>
      <Section title="Statistics" stats={this.state}></Section>
      </>
    );
  };
}