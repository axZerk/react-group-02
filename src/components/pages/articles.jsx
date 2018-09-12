import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import qs from 'qs';
import CategorySelector from '../category-selector';
import { fetchArticles } from '@redux/actions/articles';

const categories: Array<string> = ['all', 'health', 'technology', 'sports'];

const getCategoryFromProps = props =>
  qs.parse(props.location.search.slice(1)).category;

class ArticlesPage extends Component<{}> {
  componentDidMount() {
    const category: string = getCategoryFromProps(this.props);

    if (!category) {
      return this.props.history.replace({
        pathname: this.props.location.pathname,
        search: `?category=all`,
      });
    }

    this.fetchArticles(category);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory === nextCategory) return;

    this.fetchArticles(nextCategory);
  }

  fetchArticles = category => {
    this.props.fetchArticles(category);
  };

  handleCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?category=${category}`,
    });
  };

  render() {
    const { articles } = this.props;
    const { match } = this.props;
    const category = getCategoryFromProps(this.props);

    return (
      <div>
        <h2>Articles Page</h2>

        <CategorySelector
          options={categories}
          value={category}
          onChange={this.handleCategoryChange}
        />

        <ul>
          {articles.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `${match.url}/${id}`,
                  state: { from: this.props.location },
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mstp = state => ({
  articles: state.articles.items,
});

const mdtp = { fetchArticles };

export default connect(
  mstp,
  mdtp,
)(ArticlesPage);
