import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

// Imports: Redux
import rootReducer from './reducers';

// Middleware: Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['testReducer'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, createLogger())
);

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export { store, persistor };
