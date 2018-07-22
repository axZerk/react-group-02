import React, { Component } from 'react';

export default class NoteEditor extends Component {
  state = { value: '' };

  handleChange = evt => {
    this.setState({ value: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.value.trim() === '') return;

    this.props.onSubmit(this.state.value);

    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={value} onChange={this.handleChange} />
        <button>Add Note</button>
      </form>
    );
  }
}
