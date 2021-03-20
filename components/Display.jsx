import React from 'react';
import { Link } from 'react-router-dom';

const linkObject = [
  {
    link: '/multiply',
    gameName: 'Multiply',
  },
  {
    link: '/guessNumber',
    gameName: 'Bulls and Cows',
  },
  {
    link: '/speedMeasure',
    gameName: 'Speed Measure Game',
  },
  {
    link: '/rsp',
    gameName: 'Rock Scissor Paper',
  },
  {
    link: '/lotto',
    gameName: 'Lotto Balls',
  },
];
const Display = () => {
  return (
    <div className='container m-3 '>
      <div className='row '>
        {linkObject.map((link, i) => (
          <Link
            key={link.link + i}
            className='col p-2 m-1 btn bg-gradient text-white'
            to={link.link}
            style={{ backgroundColor: 'rgb(82 ,172 ,170)' }}
          >
            {link.gameName}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Display;
