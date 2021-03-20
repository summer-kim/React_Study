import React, { memo } from 'react';

const Trail = ({ trail }) => {
  return (
    <li>
      {trail.answer} &#9733; strike:{trail.strike} ball:{trail.ball}
    </li>
  );
};

export default memo(Trail);
