import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import REDUX_PERSIST from './ReduxPersist';
import Rehydration from './Rehydration';
// import { composeWithDevTools } from 'remote-redux-devtools';

export default rootReducer => {
  const appMiddlewares = [];
  const enhancers = [];

  // const composeWithDev = composeWithDevTools({
  //     hostname: 'localhost',
  //     port: 8082,
  //     name: 'Raifood',
  //     realtime: true
  // })

  appMiddlewares.push(thunk);

  // if (__DEV__) {
  //     appMiddlewares.push(logger)
  // }

  enhancers.push(applyMiddleware(...appMiddlewares));

  const store = createStore(rootReducer, composeWithDevTools(...enhancers));

  if (REDUX_PERSIST.active) {
    Rehydration.updateReducers(store);
  }

  return { store };
};
