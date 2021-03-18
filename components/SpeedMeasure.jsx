import React, { Fragment, Component } from 'react';

class SpeedMeasure extends Component {
  state = {
    status: 'wait',
    message: 'Click to Start',
    result: '',
  };
  setTimer;
  startTime;
  endTime;

  onClick = () => {
    const { status } = this.state;
    switch (status) {
      case 'wait':
        this.setState({ message: 'Click Box when color turns to Blue' });
        break;
      case 'ready':
        this.setState({ message: '<Fail> Too Early' });
        break;
      case 'now':
        this.setState({ message: '<Success> Good Job' });
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <Fragment>
        <div
          onClick={this.onClick}
          className='bg-success w-50 h-50 d-flex align-items-center justify-content-center text-white h2 mx-auto'
        >
          {this.state.message}
        </div>
        <div>{this.state.result}</div>
      </Fragment>
    );
  }
}

export default SpeedMeasure;
