import React, { Component, Fragment } from 'react';

function getNumbers() {
  let numList = new Array(9);
  let numPick = [];
  numList = numList.map((v, idx) => idx);
  for (let i = 0; i <= 3; i++) {
    numPick.push(numList.splice(Math.floor(Math.random() * (8 - i)), 1)[0]);
    numPick[i] = Number(numPick[i]);
  }
  return numPick;
}
export default class GuessNumber extends Component {
  state = {
    value: getNumbers(),
    result: '',
  };
  onSubmit = (e) => {
    e.preventDefault();
  };
  onChange = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <div>Guess What? -&gt _ _ _ _ (except Zero)</div>
        <form onSubmit={this.onSubmit}>
          <input
            type='number'
            value={this.state.value}
            onChange={this.onChange}
          />
          <button type='submit'>Submit</button>
        </form>
        <div>{this.state.result}</div>
      </Fragment>
    );
  }
}
