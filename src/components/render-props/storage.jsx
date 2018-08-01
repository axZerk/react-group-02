import React, { Component } from 'react';

export default class Storage extends Component {
  state = {
    localStorageAvailable: false,
  };

  componentDidMount() {
    this.checkLocalStorageExists();
  }

  checkLocalStorageExists() {
    const testKey = 'test';

    try {
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      this.setState({ localStorageAvailable: true });
    } catch (e) {
      this.setState({ localStorageAvailable: false });
    }
  }

  load = key => {
    return this.state.localStorageAvailable ? localStorage.getItem(key) : null;
  };

  save = (key, data) => {
    if (!this.state.localStorageAvailable) return;

    localStorage.setItem(key, data);
  };

  remove = key => {
    if (!this.state.localStorageAvailable) return;

    localStorage.removeItem(key);
  };

  render() {
    return this.props.children({
      load: this.load,
      save: this.save,
      remove: this.remove,
    });
  }
}
