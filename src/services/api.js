import axios from 'axios';

const API_KEY = 'ff9bbd2cbbe435339b9b0aca1c6caa94';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = ({ category, onSuccess, onError }) => {
  const url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`;

  return axios
    .get(url)
    .then(response => response.data.results)
    .then(onSuccess)
    .catch(onError);
};
