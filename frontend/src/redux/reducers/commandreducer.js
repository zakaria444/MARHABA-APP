import { ActionTypes } from "../constants/action-types";
const intialState = {
  Command: [],
};


export const commandReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_COMMAND:
      return { ...state, Command: payload };
    default:
      return state;
  }
};

export const selectedCommandReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_COMMAND:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_COMMAND:
      return {};
    default:
      return state;
  }
};
export default commandReducer;
