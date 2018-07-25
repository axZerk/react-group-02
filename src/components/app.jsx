import React, { Component } from 'react';
import Button from './button';
// import tabs from '../tabs.json';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Styling React Components</h1>
        <Button
          label="Sign In"
          onClick={() => console.log('Click!')}
          disabled
        />

        <Button label="Sign Up" onClick={() => console.log('Click!')} active />
      </div>
    );
  }
}
