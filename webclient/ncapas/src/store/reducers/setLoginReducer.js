// store/reducers/exampleReducer.js
const initialState = {
    rol: null,
    username: "",
    token: ""
  };
  
  const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE':
        return {
          ...state,
          rol: action.payload.rol,
          username: action.payload.username,
          token: action.payload.token
        };
        default:
            return state;
        
    }
  };
  
  export default LoginReducer;