import React, { Fragment, Component } from 'react';

class SpeedMeasure extends Component {
  state = {
    status: 'wait',
    message: 'Click to Start',
    result: '',
    records: [],
  };
  setTimer;
  startTime;
  endTime;

  onClick = () => {
    const { status, records } = this.state;
    switch (status) {
      case 'wait':
        this.setState({
          status: 'ready',
          message: 'Click Box when color turns to Blue',
          result: '',
        });
        this.setTimer = setTimeout(() => {
          this.startTime = Date.now();
          this.setState({ status: 'now', message: 'Click Now' });
        }, Math.random() * 3000 + 1000);
        break;
      case 'ready':
        clearTimeout(this.setTimer);
        this.setState({
          status: 'wait',
          message: 'Too Early, Click to start again',
          result: 'FAIL',
        });
        break;
      case 'now':
        this.endTime = Date.now();
        const time = this.endTime - this.startTime;
        this.setState({
          status: 'wait',
          message: 'Good Job Click to start agiain',
          result: 'SUCCESS',
          records: [...records, time],
        });

        break;
      default:
        break;
    }
  };
  showAverage = () => {
    const { records } = this.state;
    let sum, average;
    if (records) {
      sum = records.reduce((acc, curr) => acc + curr, 0);
      average = sum / records.length;
    }
    return average > 0 ? average / 1000 : 0;
  };
  render() {
    const { result, message, status } = this.state;
    const statusColor =
      status === 'ready'
        ? 'bg-danger'
        : status === 'wait'
        ? 'bg-success'
        : 'bg-primary';
    return (
      <Fragment>
        <div
          onClick={this.onClick}
          className={` w-50 h-50 d-flex flex-column align-items-center justify-content-center text-white h2 mx-auto ${statusColor}`}
        >
          <h3>{result}</h3>
          <div>{message}</div>
        </div>
        <div>Average : {this.showAverage()}s</div>
      </Fragment>
    );
  }
}

export default SpeedMeasure;
