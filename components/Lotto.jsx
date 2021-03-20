import React, { Component } from 'react';

function getLottoNumbers() {
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  console.log(candidate);
}

class Lotto extends Component {
  state = {
    numberSelected: getLottoNumbers(),
    ballSelected: [],
    reset: false,
  };
  render() {
    return <div></div>;
  }
}

export default Lotto;
