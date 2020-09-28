import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Strings } from '../services/language';
import { FontFamily, FontSize, Integer } from '../styles';
import { OrdersTab, ProductsTab } from '../screens/home/tabs';
import Images from '../assets/images/Images';
import MapScreen from '../screens/map/MapScreen';

const Stack = createStackNavigator();

const screenOptionStyle = (navigation, color) => {
  return {
    animationEnabled: true,
    headerStyle: {
      backgroundColor: color.BACKGRAND_TOOLBAR,
    },
    headerTitleAlign: 'center',
    headerTitle: (props) => (
      <Text style={{ color: 'white', fontFamily: FontFamily.TITLE }}>{props.children}</Text>
    ),
    // headerLeft: () => (
    //   <Icon
    //     style={{ color: 'white', marginStart: Integer.PADDING }}
    //     onPress={navigation.openDrawer}
    //     type="MaterialIcons"
    //     name="menu"
    //   />
    // ),
  };
};

const ProductsStackNavigator = ({ navigation }) => {
  const color = useSelector((state) => state.color);
  return (
    <Stack.Navigator
      initialRouteName="productsTab"
      screenOptions={screenOptionStyle(navigation, color)}>
      <Stack.Screen
        name="productsTab"
        options={{ title: Strings.bottomTab.products.title }}
        component={ProductsTab}
      />
    </Stack.Navigator>
  );
};

const OrdersStackNavigator = ({ navigation }) => {
  const color = useSelector((state) => state.color);

  return (
    <Stack.Navigator
      initialRouteName="ordersTab"
      screenOptions={screenOptionStyle(navigation, color)}>
      <Stack.Screen
        name="ordersTab"
        options={{ title: Strings.bottomTab.orders.title }}
        component={OrdersTab}
      />
    </Stack.Navigator>
  );
};

const MapStackNavigator = ({ navigation, route }) => {
  const color = useSelector((state) => state.color);

  return (
    <Stack.Navigator
      initialRouteName="mapScreen"
      screenOptions={screenOptionStyle(navigation, color)}>
      <Stack.Screen
        name="mapScreen"
        initialParams={route.params}
        options={{
          title: Strings.map.title,
          animationEnabled: true,
          headerStyle: {
            backgroundColor: color.BACKGRAND_TOOLBAR,
          },
          headerTitleAlign: 'center',
          headerTitle: (props) => (
            <Text
              style={{
                color: color.TEXT_TITLE,
                fontSize: FontSize.SUBTITLE,
                fontFamily: FontFamily.TITLE,
              }}>
              {props.children}
            </Text>
          ),
          headerLeft: () => (
            <Image
              style={{ tintColor: color.TEXT_COLOR, height: wp('6%'), width: wp('6%') }}
              onPress={navigation.goBack}
              name={I18nManager.isRTL ? Images.ic_back_rtl : Images.ic_back_ltr}
            />
          ),
        }}
        component={MapScreen}
      />
    </Stack.Navigator>
  );
};

export { ProductsStackNavigator, OrdersStackNavigator, MapStackNavigator };
