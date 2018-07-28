import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Tabs from './tabs';
import tech from '../tech.json';

class App extends Component {
  render() {
    return (
      <div>
        <Tabs items={tech} />
      </div>
    );
  }
}

export default hot(module)(App);
