import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import Ball from './subParts/Ball';

const getLottoNumbers = () => {
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
};

const Lotto = () => {
  const [numbers, setNumbers] = useState(getLottoNumbers());
  const [balls, setBalls] = useState([]);
  const [startable, setStartable] = useState(true);
  const [resetable, setResetable] = useState(false);
  const [run, setRun] = useState(false);
  const [reset, setReset] = useState(false);
  const timeoutArray = useRef([1, 2]);

  useEffect(() => {
    if (run) {
      for (let i = 0; i < numbers.length; i++) {
        console.log(timeoutArray.current[i]);
        timeoutArray.current[i] = setTimeout(() => {
          setBalls((preBalls) => [...preBalls, numbers[i]]);
          if (i === numbers.length - 1) setResetable(true);
        }, (i + 1) * 1000);
      }
    }
    return () => {
      if (run) {
        clearTimeFunction();
        setRun(false);
      }
    };
  }, [run]);

  useEffect(() => {
    if (reset) {
      onReset();
    }
  }, [reset]);

  const onClick = () => (e) => {
    if (e.target.id === 'start') {
      setRun(true);
      setStartable(false);
    } else {
      setReset(true);
      setResetable(false);
    }
  };

  const onReset = () => {
    clearTimeFunction();
    setNumbers(getLottoNumbers());
    setBalls([]);
    setStartable(true);
    setResetable(false);
    setRun(false);
    setReset(false);
  };

  const clearTimeFunction = () => {
    timeoutArray.current.length > 0 &&
      timeoutArray.current.forEach((timeout) => {
        clearTimeout(timeout);
      });
  };

  return (
    <div className='container text-center h-100'>
      <h3 className='m-2 text-center text-uppercase text-secondary'>Result</h3>
      <div className='d-flex m-1 justify-content-center align-items-center h-50'>
        {balls.map((num, i) => (
          <Ball num={num} key={i + ':' + num} />
        ))}
      </div>
      <div>
        <button
          className='btn btn-outline-secondary m-1'
          id='start'
          disabled={!startable}
          onClick={onClick()}
        >
          Start
        </button>
        <button
          className='btn btn-outline-secondary m-1'
          id='reset'
          disabled={!resetable}
          onClick={onClick()}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Lotto;
