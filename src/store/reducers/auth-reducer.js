import TYPES from '../types';

// Initial State
const initialState = {
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AUTH.TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
