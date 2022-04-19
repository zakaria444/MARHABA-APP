import { ActionTypes } from "../constants/action-types";
const intialState = {
  repas: [],
};


export const repasReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_REPAS:
      return { ...state, repas: payload };
    default:
      return state;
  }
};

export const selectedRepasReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_REPAS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_REPAS:
      return {};
    default:
      return state;
  }
};
