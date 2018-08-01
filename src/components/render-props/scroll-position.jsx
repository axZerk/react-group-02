import React, { Component } from 'react';

export default class extends Component {
  state = { position: 0 };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ position: window.pageYOffset });
  };

  render() {
    return this.props.children(this.state.position);
  }
}
