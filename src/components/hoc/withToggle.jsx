import React, { Component } from 'react';

const withToggle = WrappedComponent => {
  return class WithToggle extends Component {
    state = {
      visible: false,
    };

    onToggle = () => {
      this.setState(prevState => ({ visible: !prevState.visible }));
    };

    render() {
      const { visible } = this.state;

      return (
        <div>
          <button onClick={this.onToggle} style={{ cursor: 'pointer' }}>
            {visible ? 'Hide' : 'Show'}
          </button>
          {visible && <WrappedComponent {...this.props} />}
        </div>
      );
    }
  };
};

export default withToggle;
