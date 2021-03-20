import React, { Component } from 'react';
import Ball from './subParts/Ball';

function getLottoNumbers() {
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (shuffle.length < 6) {
    const num = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffle.push(num);
  }
  return shuffle.sort((a, b) => a - b);
}

class Lotto extends Component {
  state = {
    numberSelected: getLottoNumbers(),
    ballSelected: [],
    startable: true,
    resetable: false,
  };
  timeoutArray = [];

  onStart = () => {
    const { numberSelected } = this.state;
    for (let i = 0; i < numberSelected.length; i++) {
      this.timeoutArray[i] = setTimeout(() => {
        this.setState((prevState) => ({
          ballSelected: [...prevState.ballSelected, numberSelected[i]],
        }));
        if (i === numberSelected.length - 1) {
          this.setState({ resetable: true, startable: false });
        }
      }, (i + 1) * 1000);
    }
  };

  onClick = () => (e) => {
    if (e.target.id === 'start') {
      this.onStart();
    } else {
      this.setState({ reset: true });
    }
  };

  componentWillUnmount() {
    this.timeoutArray.forEach((timeout) => {
      clearTimeout(timeout);
    });
  }

  render() {
    const { ballSelected, startable, resetable } = this.state;
    return (
      <div className='container text-center h-100'>
        <h3 className='m-2 text-center text-uppercase text-secondary'>
          Result
        </h3>
        <div className='d-flex m-1 justify-content-center align-items-center h-50'>
          {ballSelected.map((num, i) => (
            <Ball num={num} key={i + ':' + num} />
          ))}
        </div>
        <div>
          <button
            className='btn btn-outline-secondary m-1'
            id='start'
            disabled={!startable}
            onClick={this.onClick()}
          >
            Start
          </button>
          <button
            className='btn btn-outline-secondary m-1'
            id='reset'
            disabled={!resetable}
            onClick={this.onClick()}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Lotto;
