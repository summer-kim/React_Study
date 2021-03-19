import React from 'react';
import { Link } from 'react-router-dom';

const Display = () => {
  return (
    <div className='container m-3 '>
      <div className='row '>
        <Link
          className='col p-2 m-1 btn bg-gradient text-white'
          to='/multiply'
          style={{ backgroundColor: 'rgb(82 ,172 ,170)' }}
        >
          Multiply
        </Link>
        <Link
          className='col p-2 m-1 btn bg-gradient text-white'
          to='/guessNumber'
          style={{ backgroundColor: 'rgb(82 ,172 ,170)' }}
        >
          Bulls and Cows
        </Link>
        <Link
          className='col p-2 m-1 btn bg-gradient text-white'
          to='/speedMeasure'
          style={{ backgroundColor: 'rgb(82 ,172 ,170)' }}
        >
          Speed Measure Game
        </Link>
        <Link
          className='col p-2 m-1 btn bg-gradient text-white'
          to='/rsp'
          style={{ backgroundColor: 'rgb(82 ,172 ,170)' }}
        >
          Rock Scissor Paper
        </Link>
      </div>
    </div>
  );
};
export default Display;
