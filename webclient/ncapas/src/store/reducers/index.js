// store/reducers/index.js
import { combineReducers } from 'redux';

import LoginReducer from './setLoginReducer';
const rootReducer = combineReducers({
 
  login: LoginReducer
  // Agrega otros reducers aquí
});

export default rootReducer;