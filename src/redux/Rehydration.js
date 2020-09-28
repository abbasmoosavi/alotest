import AsyncStorage from '@react-native-community/async-storage';
import { persistStore } from 'redux-persist';
// import StartupActions from '../Redux/StartupRedux'
import REDUX_PERSIST from './ReduxPersist';
// import AppConfig from '../configs/AppConfig';

const updateReducers = store => {
  const reducerVersion = REDUX_PERSIST.reducerVersion;
  // const startup = () => store.dispatch(StartupActions.startup())

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        // if (AppConfig.IS_DEBUG) {
        console.log({
          name: 'PURGE',
          value: {
            'Old Version:': localVersion,
            'New Version:': reducerVersion,
          },
          preview: 'Reducer Version Change Detected',
          important: true,
        });
        // }
        // Purge store
        persistStore(store, null, null).purge();
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, null, null);
      }
    })
    .catch(() => {
      persistStore(store, null, null);
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};

export default { updateReducers };
