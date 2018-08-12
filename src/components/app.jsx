import React from 'react';
import { connect } from 'react-redux';
import ArticleList from './article-list';
import Backdrop from './shared-ui/backdrop';
import Loader from './shared-ui/loader';
import Notification from './notification';
import QueryForm from './query-form';
import { fetchArticles } from '../redux/actions';

const App = ({ articles, loading, error, fetchArticles }) => (
  <div>
    <QueryForm />
    {/* <button onClick={() => fetchArticles('react')}>Fetch Articles</button> */}
    {error && <Notification text={error.message} />}
    {loading && (
      <Backdrop>
        <Loader />
      </Backdrop>
    )}
    {!error && !loading && <ArticleList articles={articles} />}
  </div>
);

const mapStateToProps = state => ({
  articles: state.articles.items,
  loading: state.articles.loading,
  error: state.articles.error,
});

const mapDispatchToProps = { fetchArticles };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
