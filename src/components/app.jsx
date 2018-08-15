import React from 'react';
import { connect } from 'react-redux';
import ArticleList from './article-list';
import Backdrop from './shared-ui/backdrop';
import Loader from './shared-ui/loader';
import Notification from './notification';
import QueryForm from './query-form';
import { getAllArticles, isLoading, getError } from '../redux/selectors';

const App = ({ articles, loading, error }) => (
  <div>
    <QueryForm />
    {error && <Notification text={error.message} />}
    {loading && (
      <Backdrop>
        <Loader />
      </Backdrop>
    )}
    <ArticleList articles={articles} />
  </div>
);

const mapStateToProps = state => ({
  articles: getAllArticles(state),
  loading: isLoading(state),
  error: getError(state),
});

export default connect(
  mapStateToProps,
  null,
)(App);
