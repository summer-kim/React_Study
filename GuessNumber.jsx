import React, { PureComponent, Fragment } from 'react';
import Trail from './Trail';

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
export default class GuessNumber extends PureComponent {
  state = {
    value: getNumbers(),
    answer: '',
    result: '',
    chance: 10,
    trails: [],
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
    this.setState({
      trails: [
        ...this.state.trails,
        { answer: e.target.answer.value, strike, ball },
      ],
    });

    if (strike === 4) {
      this.setState({ result: 'WIN' });
      setTimeout(() => {
        this.initializeState();
      }, 3000);
      return;
    }

    this.setState(
      (prevState) => ({
        chance: prevState.chance - 1,
      }),
      () => {
        if (this.state.chance === 0) {
          this.setState({ result: 'LOSE' });
          setTimeout(() => {
            this.initializeState();
          }, 3000);
          return;
        }
      }
    );
    this.setState({ answer: '' });
  };

  initializeState = () => {
    this.setState({
      value: getNumbers(),
      answer: '',
      result: '',
      chance: 10,
      trails: [],
    });
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
        <h1>{this.state.result}</h1>
        <ul>
          {this.state.trails.map((trail, i) => (
            <Trail trail={trail} key={trail.answer + i} />
          ))}
        </ul>
      </Fragment>
    );
  }
}
