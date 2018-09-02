import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
} from '../types';
import { fetchArticlesByCategory } from '@services/api';

const fetchArticlesRequest = () => ({
  type: FETCH_ARTICLES_REQUEST,
});

const fetchArticlesSuccess = articles => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: articles,
});

const fetchArticlesFailure = error => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: error,
});

export const fetchArticles = category => dispatch => {
  dispatch(fetchArticlesRequest());

  fetchArticlesByCategory(category)
    .then(articles => dispatch(fetchArticlesSuccess(articles)))
    .catch(err => dispatch(fetchArticlesFailure(err)));
};
