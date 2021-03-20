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
    ballSelected: [1, 11, 21, 31, 41],
    reset: false,
    start: false,
  };
  render() {
    const { ballSelected, reset } = this.state;
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
          <button className='btn btn-outline-secondary m-1 '>Start</button>
          <button className='btn btn-outline-secondary m-1 '>Reset</button>
        </div>
      </div>
    );
  }
}

export default Lotto;
