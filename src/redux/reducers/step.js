import { CHANGE_STEP } from "../actions/types";

export default function stepReducer(state = 5, { type, payload }) {
  switch (type) {
    case CHANGE_STEP:
      return payload;

    default:
      return state;
  }
}
