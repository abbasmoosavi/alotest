import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import REDUX_PERSIST from './ReduxPersist';
import createStore from './CreateStore';
import {
  ColorsReducer,
  LanguageReducer,
  LocationReducer,
  LocationSettingsReducer,
} from './reducers';

export const reducers = combineReducers({
  color: ColorsReducer,
  language: LanguageReducer,
  location: LocationReducer,
  locationSettings: LocationSettingsReducer,
});

export default function configureStore() {
  let finalReducers = reducers;

  // If rehydration is on use persistReducer otherwise default combineReducers
  if (REDUX_PERSIST.active) {
    const persistConfig = REDUX_PERSIST.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  const { store } = createStore(finalReducers);
  const persistor = persistStore(store);

  return { store, persistor };
}
