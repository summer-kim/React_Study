import React, { PureComponent } from 'react';

class Trail extends PureComponent {
  render() {
    const { trail } = this.props;
    return (
      <li>
        {trail.answer} &#9733; strike:{trail.strike} ball:{trail.ball}
      </li>
    );
  }
}

export default Trail;
