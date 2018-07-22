import React, { Component } from 'react';

export default class SignupForm extends Component {
  state = {
    login: '',
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    console.log(this.state);
  };

  render() {
    const { login, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <button>Sign up as {login}</button>
      </form>
    );
  }
}
