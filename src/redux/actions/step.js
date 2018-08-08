import { CHANGE_STEP } from "./types";

export const changeStep = step => ({
  type: CHANGE_STEP,
  payload: step
});
