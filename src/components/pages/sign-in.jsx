import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signUserIn } from '@redux/actions/session';
import withAuthCheck from '../hoc/withAuthCheck';
import Button from '@shared/button';

const styles = {
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: 320,
    marginBottom: 16,
    padding: 4,
    fontSize: 18,
  },
};

const INITIAL_STATE = { email: '', password: '' };

class SignInPage extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    if (email === '' || password === '') return;

    this.props.signUserIn({ ...this.state });
    this.resetState();
  };

  resetState = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleInputChange = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div style={styles.page}>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <input
            type="text"
            name="email"
            style={styles.input}
            placeholder="Email"
            value={email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            style={styles.input}
            placeholder="Password"
            value={password}
            onChange={this.handleInputChange}
          />
          <Button label="Login" type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { signUserIn };

export default compose(
  withAuthCheck,
  connect(
    null,
    mapDispatchToProps,
  ),
)(SignInPage);
