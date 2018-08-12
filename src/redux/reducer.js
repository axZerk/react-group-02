import { combineReducers } from 'redux';
import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  CHANGE_QUERY,
} from './types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_ARTICLES_SUCCESS:
      return payload;

    default:
      return state;
  }
};

const loading = (state = false, { type }) => {
  switch (type) {
    case FETCH_ARTICLES_REQUEST:
      return true;

    case FETCH_ARTICLES_SUCCESS:
    case FETCH_ARTICLES_FAILURE:
      return false;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_ARTICLES_REQUEST:
      return null;

    case FETCH_ARTICLES_FAILURE:
      return payload;

    default:
      return state;
  }
};

const query = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_QUERY:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  query,
  loading,
  error,
});
