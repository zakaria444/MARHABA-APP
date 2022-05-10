import { combineReducers } from "redux";

import { repasReducer, selectedRepasReducer } from "./productsReducer";

import  authreducer  from "./authreducer"

import  CommandReducer  from "./commandreducer"

import cartReducer from "./cartReducers";


const reducers = combineReducers({

  allRepas: repasReducer,

  repas: selectedRepasReducer,

  authState:   authreducer,

  commandReducer: CommandReducer,

  cart: cartReducer,


});

export default reducers;
