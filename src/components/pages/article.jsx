import React, { Component } from 'react';
import { fetchArticleById } from '../../services/api';

const getIdFromProps = props => props.match.params.articleId;

export default class Article extends Component {
  state = {
    id: null,
    title: null,
    imageUrl: null,
    author: null,
    category: null,
    body: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);

    fetchArticleById(id).then(article => {
      this.setState({ ...article });
    });
  }

  handleGoBack = () => {
    this.props.history.push('/articles');
  };

  render() {
    const { title, imageUrl, author, category, body } = this.state;

    return (
      <article>
        <h2>{title}</h2>
        <img src={imageUrl} alt="" />
        <p>
          <b>Author: {author}</b>
        </p>
        <p>
          <b>Category: {category}</b>
        </p>
        <p>{body}</p>
        <button onClick={this.handleGoBack}>Back to articles</button>
      </article>
    );
  }
}
