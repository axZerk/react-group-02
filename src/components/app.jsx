import React, { Component } from "react";
import Counter from "./counter";
import StepManager from "./step-manager";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StepManager />
        <Counter />
      </div>
    );
  }
}

export default App;
