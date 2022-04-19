import { ActionTypes } from "../constants/action-types";

export const setRepas = (repas) => {
  return {
    type: ActionTypes.SET_REPAS,
    payload: repas,
  };
};

export const selectedRepas = (repas) => {
  return {
    type: ActionTypes.SELECTED_REPAS,
    payload: repas,
  };
};
export const removeSelectedRepas = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_REPAS,
  };
};
