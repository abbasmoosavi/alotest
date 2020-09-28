/* eslint-disable no-label-var */
/* eslint-disable no-restricted-syntax */

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, StatusBar, I18nManager } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import * as RNLocalize from 'react-native-localize';
import ReactNativeRestart from 'react-native-restart';
import { Helper } from '../utils';
import { Strings } from '../services/language';
import LanguageActions from '../redux/actions/LanguageActions';
import BottomTabNavigator from './TabNavigator';

const Router = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const color = useSelector((state) => state.color);
  const [initialRoute, setInitialRoute] = useState(null);
  const [loading, setLoading] = useState(true);
  const languageCodeData = Helper.getLanguageData();

  const Stack = createStackNavigator();

  useEffect(() => {
    if (language.isRTL != null && I18nManager.isRTL !== language.isRTL) {
      setTimeout(() => {
        ReactNativeRestart.Restart();
      }, 200);
    }
    config();
    setInitialRoute('home');
  }, []);

  useEffect(() => {
    if (initialRoute) {
      setLoading(false);
      Helper.hideSplash();
    }
  }, [initialRoute]);

  function config() {
    if (language.value === null) {
      language: for (let i = 0; i < RNLocalize.getLocales().length; i += 1) {
        for (let j = 0; j < languageCodeData.length; j += 1) {
          if (RNLocalize.getLocales()[i].languageCode === languageCodeData[j].value) {
            Strings.setLanguage(languageCodeData[j].value);
            I18nManager.forceRTL(languageCodeData[j].isRTL);
            I18nManager.allowRTL(languageCodeData[j].isRTL);
            /**
             * store language to redux
             */
            dispatch(
              LanguageActions.setLanguage(
                languageCodeData[j].value,
                languageCodeData[j].isRTL,
                languageCodeData[j].label,
              ),
            );
            break language;
          }
        }
      }
    } else {
      /**
       * Get language from redux store and set to application
       */
      Strings.setLanguage(language.value);
      I18nManager.forceRTL(language.isRTL);
      I18nManager.allowRTL(language.isRTL);
    }
    setInitialRoute('home');
  }

  if (loading) {
    return null;
  }

  return (
    <>
      <StatusBar
        backgroundColor={color.BACKGRAND_TOOLBAR}
        barStyle={color.mode === 'light' ? 'dark-content' : 'light-content'}
      />
      <NavigationContainer
        linking={{
          prefixes: ['https://alopeyk.com'],
          config: {
            newsItemScreen: {
              path: 'news/:id',
              parse: {
                id: Number,
              },
            },
          },
        }}
        fallback={<Text>Loading…</Text>}>
        <Stack.Navigator
          screenOptions={{ ...TransitionPresets.ScaleFromCenterAndroid }}
          headerMode="none"
          initialRouteName={initialRoute}>
          <Stack.Screen name="home" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;
