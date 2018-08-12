import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles, changeQuery } from '../redux/actions';

class QueryForm extends Component {
  handleChange = e => {
    this.props.changeQuery(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.fetchArticles(this.props.value);
    this.props.changeQuery('');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  value: state.articles.query,
});

const mapDispatchToProps = { fetchArticles, changeQuery };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QueryForm);
