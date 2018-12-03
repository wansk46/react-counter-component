import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number:0}
  add1toNumber = () => {
    this.state.number++;
    this.setState(this.state);
  }
  minus1toNumber = () => {
  this.state.number--;
  this.setState(this.state);
}


  render() {
    return (
      <div className="">
      <button onClick = {this.add1toNumber}>+</button>
      <button onClick = {this.minus1toNumber}>-</button>
      <span>number:{this.state.number}</span>
      </div>
    );
  }
}

export default App;
