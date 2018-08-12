import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  CHANGE_QUERY,
} from './types';
import { fetchArticlesByQuery } from '../services/api';

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

export const fetchArticles = query => dispatch => {
  dispatch(fetchArticlesRequest());

  fetchArticlesByQuery(query)
    .then(articles => dispatch(fetchArticlesSuccess(articles)))
    .catch(err => dispatch(fetchArticlesFailure(err)));
};

export const changeQuery = query => ({
  type: CHANGE_QUERY,
  payload: query,
});
