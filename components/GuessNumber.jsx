import React, { useState, useEffect, Fragment, memo } from 'react';
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
const GuessNumber = () => {
  const [Value, setValue] = useState(getNumbers());
  const [Answer, setAnswer] = useState('');
  const [Result, setResult] = useState('');
  const [Chance, setChance] = useState(10);
  const [Trails, setTrails] = useState([]);

  useEffect(() => {
    if (Chance === 0) {
      setResult('LOSE');
      setTimeout(() => {
        initializeState();
      }, 3000);
    }
  }, [Chance]);

  const onSubmit = (e) => {
    e.preventDefault();
    const answerArr = e.target.answer.value.split('');
    let strike = 0;
    let ball = 0;

    for (let i = 0; i <= 3; i++) {
      const num = Number(answerArr[i]);
      if (num === Value[i]) strike++;
      else if (Value.indexOf(num) > -1) ball++;
    }
    setTrails([...Trails, { answer: e.target.answer.value, strike, ball }]);

    if (strike === 4) {
      setResult('WIN');
      setTimeout(() => {
        initializeState();
      }, 3000);
      return;
    }

    setChance(Chance - 1);
    setAnswer('');
  };

  const initializeState = () => {
    setValue(getNumbers());
    setResult('');
    setChance(10);
    setTrails([]);
  };

  const onChange = (e) => {
    if (e.target.value.length > 4) {
      return;
    }
    setAnswer(e.target.value);
  };

  return (
    <Fragment>
      <div>Guess What? &#9755; _ _ _ _ (except Zero)</div>
      <form onSubmit={onSubmit}>
        <input type='number' id='answer' value={Answer} onChange={onChange} />
        <button type='submit'>Submit</button>
      </form>
      <h1>{Result}</h1>
      <ul>
        {Trails.map((trail, i) => (
          <Trail trail={trail} key={trail.answer + i} />
        ))}
      </ul>
    </Fragment>
  );
};

export default memo(GuessNumber);
