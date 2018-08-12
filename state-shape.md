# State shape

```js
const state = {
  movies: {
    items: [],
    loading: false,
    error: null,
    search: {
      category: null,
      query: '',
    },
  },
  watchlist: [],
};
```

## watchlist actions

```js
const addToWatchlist = movie => ({
  type: '',
  payload: movie,
});

const removeFromWatchlist = id => ({
  type: '',
  payload: id,
});
```

## reducer

```js
{
}
const watchlist = (state = [], { type, payload }) => {
  switch (type) {
    case 'add to watchlist':
      return [...state, payload];
    case 'remove from watchlist':
      return state.filter(movie => movie.id !== payload);
    default:
      return state;
  }
};
```
