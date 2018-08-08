import { combineReducers } from "redux";
import counterReducer from "./counter";
import stepReducer from "./step";

const rootReducer = combineReducers({
  counterValue: counterReducer,
  step: stepReducer
});

export default rootReducer;
