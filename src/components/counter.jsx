import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './button';

export default class Counter extends Component {
  static propTypes = {
    startValue: PropTypes.number,
    step: PropTypes.number,
  };

  static defaultProps = {
    startValue: 0,
    step: 1,
  };

  state = {
    value: this.props.startValue,
  };

  handleIncrement = () => {
    this.setState((prevState, props) => ({
      value: prevState.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState, props) => ({
      value: prevState.value - props.step,
    }));
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;

    return (
      <div>
        <h2>{value}</h2>
        <Button onClick={this.handleIncrement} label={`Increment by ${step}`} />
        <Button onClick={this.handleDecrement} label={`Decrement by ${step}`} />
      </div>
    );
  }
}
