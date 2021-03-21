const React = require('react');
const { useState, useRef, Fragment } = React;

const MultiplyGame = () => {
  const [FirstNum, setFirstNum] = useState(Math.ceil(Math.random() * 9));
  const [SecondNum, setSecondNum] = useState(Math.ceil(Math.random() * 9));
  const [Value, setValue] = useState('');
  const [Result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(Value) === FirstNum * SecondNum) {
      setResult(Value + ' Correct!');
      setFirstNum(Math.ceil(Math.random() * 9));
      setSecondNum(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.style.backgroundColor = 'rgb(216, 175, 216)';
    } else {
      setResult(Value + ' Wrong!');
      setValue('');
      inputRef.current.style.backgroundColor = 'rgb(236, 96, 96)';
    }
    setTimeout(() => {
      inputRef.current.style.backgroundColor = '';
    }, 350);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Fragment>
      <div>
        {FirstNum} X {SecondNum} ?
      </div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type='number' value={Value} onChange={onChange} />
        <button type='submit'>Submit</button>
      </form>
      <div>{Result}</div>
    </Fragment>
  );
};

module.exports = MultiplyGame;
