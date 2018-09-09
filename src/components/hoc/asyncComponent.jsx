import React, { Component } from 'react';

const asyncComponent = ({ loader, loading: Loading }) => {
  return class AsyncComponent extends Component {
    state = {
      component: null,
    };

    componentDidMount() {
      loader().then(({ default: component }) => {
        this.setState({ component });
      });
    }

    render() {
      const { component: LoadedComponent } = this.state;

      return LoadedComponent ? (
        <LoadedComponent {...this.props} />
      ) : (
        <h1>Loading...</h1>
      );
    }
  };
};

export default asyncComponent;
