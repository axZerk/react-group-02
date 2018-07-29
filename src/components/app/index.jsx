import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Backdrop from '../shared-ui/backdrop';
import Loader from '../shared-ui/loader';
import Button from '../shared-ui/button';
import ErrorNotification from '../shared-ui/error-notification';
import CategorySelector from '../category-selector';
import { fetchMovies } from '../../services/api';
import selectorOptions from '../../selector-options';
// import Tabs from './tabs';
// import tech from '../tech.json';

class App extends Component {
  state = {
    movies: [],
    category: null,
    loading: false,
    error: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.state.category) return true;

    const prevCategory = this.state.category.value;
    const nextCategory = nextState.category.value;

    const shouldUpdate = prevCategory !== nextCategory;

    return shouldUpdate;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState.category: ', prevState.category);
    console.log('this.state.category: ', this.state.category);

    if (!prevState.category) {
      fetchMovies({
        category: this.state.category.value,
        onSuccess: this.handleFetchSuccess,
        onError: this.handleFetchFailure,
      });

      return;
    }

    const prevCategory = prevState.category.value;
    const nextCategory = this.state.category.value;

    if (prevCategory !== nextCategory) {
      fetchMovies({
        category: nextCategory,
        onSuccess: this.handleFetchSuccess,
        onError: this.handleFetchFailure,
      });
    }
  }

  handleFetchSuccess = movies => {
    this.setState({ movies, loading: false });
  };

  handleFetchFailure = error => {
    this.setState({ loading: false, error: error.message });
  };

  handleFetch = () => {
    this.setState({ loading: true, error: null });

    // axios
    //   .get(API + DEFAULT_QUERY)
    //   .then(response => response.data.hits)
    //   .then(hits =>
    //     this.setState({ hits, loading: false }, () =>
    //       localStorage.setItem('hits', JSON.stringify(hits)),
    //     ),
    //   )
    //   .catch(error => this.setState({ loading: false, error: error.message }));
  };

  changeCategory = category => {
    this.setState({ category });
  };

  render() {
    const { category, movies, loading, error } = this.state;

    console.log(`App render - ${Date.now()}`);

    return (
      <div>
        {error && (
          <ErrorNotification message={error}>
            <Button label="Try Again" onClick={this.handleFetch} />
          </ErrorNotification>
        )}

        {loading && (
          <Backdrop>
            <Loader />
          </Backdrop>
        )}

        <CategorySelector
          options={selectorOptions}
          value={category}
          onChange={this.changeCategory}
        />

        {movies.length > 0 && (
          <ul>
            {movies.map(({ id, overview, title }) => (
              <li key={id}>
                <h2>{title}</h2>
                <p>{overview}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default hot(module)(App);
