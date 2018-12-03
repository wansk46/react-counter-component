import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number:0}
  alertUser = () => {alert("now you know how to handle onclick event")}
  add1toNumber = () => {
    this.state.number++;
    this.setState({number:this.state.number});
}
  
  minus1toNumber = () => {
    this.state.number--;
    this.setState({number:this.state.number});
  }

  render() {
    return (
      <div className="">
      <button onClick ={this.add1toNumber}>+</button>
      <button onClick ={this.minus1toNumber}>-</button>     
      <span>number:{this.state.number}</span>
      </div>
    );
  }
}

export default App;
