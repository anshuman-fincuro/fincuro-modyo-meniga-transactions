import TYPES from '../types';

// Initial State
const initialState = {
  token: null,
  errorMessage: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AUTH.TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
      case TYPES.AUTH.ERRMESSAGE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
