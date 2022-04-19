import { combineReducers } from "redux";

import { repasReducer, selectedRepasReducer } from "./productsReducer";

import  authreducer  from "./authreducer"

const reducers = combineReducers({

  allRepas: repasReducer,

  repas: selectedRepasReducer,

  authState:   authreducer,

});

export default reducers;
