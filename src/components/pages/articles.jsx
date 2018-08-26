import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../services/api';

export default class ArticlesPage extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    api.fetchAllArticles().then(articles => this.setState({ articles }));
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const { articles } = this.state;
    const { match } = this.props;

    return (
      <div>
        <h2>Articles Page</h2>

        <ul>
          {articles.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
