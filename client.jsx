import React from 'react';
import ReactDOM from 'react-dom';

//const MultiplyGame = require('./MultiplyGame');
import GuessNumber from './GuessNumber';

ReactDOM.render(
  <React.StrictMode>
    <GuessNumber />
  </React.StrictMode>,
  document.querySelector('#root')
);
