import { INCREMENT, DECREMENT } from "../actions/types";

export default function counterReducer(state = 0, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
}
