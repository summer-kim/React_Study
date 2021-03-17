import React from 'react';
import ReactDOM from 'react-dom';

//const MultiplyGame = require('./components/MultiplyGame');
import GuessNumber from './components/GuessNumber';

ReactDOM.render(
  <React.StrictMode>
    <GuessNumber />
  </React.StrictMode>,
  document.querySelector('#root')
);
