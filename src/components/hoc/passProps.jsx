import React, { Component } from 'react';

const passProps = props => WrappedComponent =>
  class PassProps extends Component {
    render() {
      return <WrappedComponent {...props} {...this.props} />;
    }
  };

export default passProps;
