import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MultiplyGame from './components/MultiplyGame';
import GuessNumber from './components/GuessNumber';
import SpeedMeasure from './components/SpeedMeasure';
import RockScissorPaper from './components/RockScissorPaper';

import Display from './components/Display';
import 'bootstrap/dist/css/bootstrap.min.css';

const Games = () => {
  return (
    <BrowserRouter>
      <div
        className='bg-light d-flex flex-column'
        style={{ height: '100vh', boxSizing: 'border-box' }}
      >
        <Display />
        <div className='container h-100'>
          <Route path='/multiply' component={MultiplyGame} />
          <Route path='/guessNumber' component={GuessNumber} />
          <Route path='/speedMeasure' component={SpeedMeasure} />
          <Route path='/rsp' component={RockScissorPaper} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Games;
