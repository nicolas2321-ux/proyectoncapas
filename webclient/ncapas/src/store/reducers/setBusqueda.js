// store/reducers/exampleReducer.js
const initialState = {
    nombreEvento: '',
    
  };
  
  const BusquedaReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_BUSQUEDA':
        return {
          ...state,
          nombreEvento: action.payload.nombreEvento
        };
        default:
            return state;
        
    }
  };
  
  export default BusquedaReducer;