import { combineReducers } from "redux";

import { repasReducer, selectedRepasReducer } from "./productsReducer";

import  authreducer  from "./authreducer"

import  CommandReducer  from "./commandreducer"


const reducers = combineReducers({

  allRepas: repasReducer,

  repas: selectedRepasReducer,

  authState:   authreducer,

  commandReducer: CommandReducer,

});

export default reducers;
