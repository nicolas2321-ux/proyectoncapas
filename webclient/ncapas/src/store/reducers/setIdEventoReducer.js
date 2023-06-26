// store/reducers/exampleReducer.js
const initialState = {
    id : null
  };
  
  const ID_eventoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_ID':
        return {
          ...state,
          id: action.payload.id
        };
        default:
            return state;
        
    }
  };
  
  export default ID_eventoReducer;