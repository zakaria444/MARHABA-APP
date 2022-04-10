import { combineReducers } from "redux";
import { repasReducer, selectedRepasReducer } from "./productsReducer";
const reducers = combineReducers({
  allRepas: repasReducer,
  repas: selectedRepasReducer,
});
export default reducers;
