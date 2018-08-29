import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticleById } from '@services/api';

const getIdFromProps = props => props.match.params.articleId;

class ArticlePage extends Component {
  state = {};

  componentDidMount() {
    if (this.props.article) {
      return this.setState({ ...this.props.article });
    }

    const id = getIdFromProps(this.props);

    fetchArticleById(id).then(article => {
      this.setState({ ...article });
    });
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state) {
      return this.props.history.push(state.from);
    }

    this.props.history.push({
      pathname: '/articles',
      search: `?category=${this.state.category}`,
    });
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

const mstp = (state, props) => {
  const id = getIdFromProps(props);

  return {
    article: state.articles.items.find(item => item.id === id),
  };
};
export default connect(mstp)(ArticlePage);
