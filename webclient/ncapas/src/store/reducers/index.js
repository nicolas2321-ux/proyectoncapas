// store/reducers/index.js
import { combineReducers } from 'redux';
import CompraBoletoReducer from './setCompraReducer'
import LoginReducer from './setLoginReducer';
const rootReducer = combineReducers({
 
  login: LoginReducer,
  CompraBoletoReducer: CompraBoletoReducer
  // Agrega otros reducers aquí
});

export default rootReducer;