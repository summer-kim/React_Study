import React, { Component, Fragment } from 'react';

function getNumbers() {
  let numList = new Array(9).fill(0);
  let numPick = [];
  numList = numList.map((v, idx) => idx + 1);
  for (let i = 0; i <= 3; i++) {
    numPick.push(numList.splice(Math.floor(Math.random() * (8 - i)), 1)[0]);
    numPick[i] = Number(numPick[i]);
  }
  return numPick;
}
export default class GuessNumber extends Component {
  state = {
    value: getNumbers(),
    answer: '',
    result: '',
    chance: 10,
  };
  onSubmit = (e) => {
    e.preventDefault();
    const answerArr = e.target.answer.value.split('');
    let strike = 0;
    let ball = 0;
    for (let i = 0; i <= 3; i++) {
      const num = Number(answerArr[i]);
      if (num === this.state.value[i]) strike++;
      else if (this.state.value.indexOf(num) > -1) ball++;
    }
    this.setState((prevState) => ({
      chance: prevState.chance - 1,
    }));
    //console.log(this.state.value, answerArr);
  };
  onChange = (e) => {
    if (e.target.value.length > 4) {
      return;
    }
    this.setState({ answer: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <div>Guess What? &#9755; _ _ _ _ (except Zero)</div>
        <form onSubmit={this.onSubmit}>
          <input
            type='number'
            id='answer'
            value={this.state.answer}
            onChange={this.onChange}
          />
          <button type='submit'>Submit</button>
        </form>
        <div>{this.state.result}</div>
      </Fragment>
    );
  }
}
