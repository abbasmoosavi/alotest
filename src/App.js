/* eslint-disable react/no-unused-state */
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, ActivityIndicator, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux';
// import Router from './route/Router';

export const { store, persistor } = configureStore();

const App = () => {
  const renderLoading = () => (
    <View style={{ position: 'absolute', top: '50%', alignSelf: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={renderLoading()}>
        <SafeAreaProvider>
          {/* <Router /> */}
          <View>
            <Text>Alo Test</Text>
          </View>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
