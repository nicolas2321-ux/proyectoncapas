// store/reducers/index.js
import { combineReducers } from 'redux';
import CompraBoletoReducer from './setCompraReducer'
import LoginReducer from './setLoginReducer';
import ID_eventoReducer from './setIdEventoReducer';
import BusquedaReducer from './setBusqueda';
const rootReducer = combineReducers({
 
  login: LoginReducer,
  CompraBoletoReducer: CompraBoletoReducer,
  ID_evento: ID_eventoReducer,
  BusquedaReducer:BusquedaReducer
  // Agrega otros reducers aquí
});

export default rootReducer;