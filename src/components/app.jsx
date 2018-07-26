import React, { Component } from 'react';
import Tabs from './tabs';
import tech from '../tech.json';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React App</h1>
        <Tabs items={tech} />
      </div>
    );
  }
}
