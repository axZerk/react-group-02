import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import sessionMiddleware from './middlewares/session';
import rootReducer from './reducers';

const middlewares = [thunk, sessionMiddleware];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

let sessionState = null;

try {
  sessionState = JSON.parse(localStorage.getItem('session'));
} catch (err) {
  console.log(err);
}

const persistedState = sessionState ? { session: sessionState } : {};

const store = createStore(rootReducer, persistedState, enhancer);

export default store;
