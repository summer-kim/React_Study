import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MultiplyGame from './multiply/MultiplyGame';
import GuessNumber from './guessNumber/GuessNumber';
import SpeedMeasure from './speedMesure/SpeedMeasure';
import RockScissorPaper from './rockScissorsPaper/RockScissorPaper';
import Lotto from './lotto/Lotto';

import Display from './Display';
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
          <Route path='/lotto' component={Lotto} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Games;
