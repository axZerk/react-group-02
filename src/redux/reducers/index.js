import { combineReducers } from 'redux';
import articles from './articles';
import session from './session';

const rootReducer = combineReducers({
  session,
  articles,
});

export default rootReducer;
