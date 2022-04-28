import { ActionTypes } from "../constants/action-types";

export const setcommand = (command) => {
  return {
    type: ActionTypes.SET_COMMAND,
    payload: command,
  };
};

export const selectedRepas = (command) => {
  return {
    type: ActionTypes.SELECTED_COMMAND,
    payload: command,
  };
};
export const removeSelectedRepas = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_REPAS,
  };
};