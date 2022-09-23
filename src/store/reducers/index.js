import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import componentReducer from './component-reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer,
  componentReducer,
});

// Exports
export default rootReducer;
