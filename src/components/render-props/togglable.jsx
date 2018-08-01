import React, { Component } from 'react';

export default class Togglabe extends Component {
  state = {
    visible: false,
  };

  onToggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    return this.props.children({
      visible: this.state.visible,
      toggle: this.onToggle,
    });
  }
}
