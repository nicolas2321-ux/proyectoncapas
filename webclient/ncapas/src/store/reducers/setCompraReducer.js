// store/reducers/exampleReducer.js
const initialState = {
    nombreEvento: null,
    fecha: "",
    localidad: "",
    idEvento: ""
  };
  
  const CompraBoletoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_COMPRA':
        return {
          ...state,
          nombreEvento: action.payload.nombreEvento,
          fecha: action.payload.fecha,
          localidad: action.payload.localidad,
          idEvento: 1
        };
        default:
            return state;
        
    }
  };
  
  export default CompraBoletoReducer;