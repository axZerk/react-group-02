import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import articlesReducer from './reducer';
// import thunk from './middlewares/thunk';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  articles: articlesReducer,
});

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
