import React, { Component } from 'react';

export default class Toggle extends Component {
  state = { on: false };

  toggle = () => {
    this.setState(prevState => ({
      on: !prevState.on,
    }));
  };

  render() {
    const { on } = this.state;

    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <h1>Togglable Content Below :)</h1>
        {on && this.props.children}
      </div>
    );
  }
}
