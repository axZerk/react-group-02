import axios from 'axios';

const API_URL = 'https://hn.algolia.com/api/v1/search?query=';

export const fetchArticlesByQuery = (query = 'javascript') => {
  return axios.get(API_URL + query).then(response => response.data.hits);
};
