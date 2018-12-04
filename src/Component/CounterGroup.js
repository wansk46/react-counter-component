import React, { Component } from 'react';
import Counter from './Counter.js'

class CounterGroup extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      counter: new Array(prop.size).fill(0),
      sum: 0,
    }
  }
  updateSum=(delta) => {
    this.setState({sum: this.state.sum+delta})
  }

  onSubmitFunc = (event) => {
    console.log(this.refs.inputField.value);
    event.preventDefault();
    this.setState({
      counter: new Array(Number(this.refs.inputField.value)).fill(0),
      sum: 0,
    })
  }



  render() {
    return (
      <div>
        {this.state.counter.map(() => <Counter onUpdate={this.updateSum}/>)}
        <form onSubmit={this.onSubmitFunc}>
            <input ref="inputField"/>
            <button type="submit"> Counter </button>
        </form>
        <span>sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default CounterGroup;