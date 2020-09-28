import React from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { Strings } from '../services/language';
import { FontFamily, Integer } from '../styles';
import { OrdersStackNavigator, ProductsStackNavigator } from './StackNavigator';
import Images from '../assets/images/Images';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const colorStore = useSelector((state) => state.color);

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: colorStore.BACKGRAND_TOOLBAR,
        },
        activeTintColor: colorStore.AMARANTH,
      }}
      backBehavior="initialRoute"
      animationEnabled
      initialRouteName="Products">
      <Tab.Screen
        name="Products"
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              {focused ? (
                <Text
                  style={{
                    color,
                    fontFamily: FontFamily.TITLE,
                  }}>
                  {Strings.bottomTab.products.title}
                </Text>
              ) : null}
            </View>
          ),
          tabBarIcon: ({ color }) => (
            <Image
              resizeMode="contain"
              style={{ tintColor: color, height: wp('6%'), width: wp('6%') }}
              source={Images.ic_product}
            />
          ),
        }}
        component={ProductsStackNavigator}
      />
      <Tab.Screen
        name="Orders"
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              {focused ? (
                <Text
                  style={{
                    color,
                    fontFamily: FontFamily.TITLE,
                  }}>
                  {Strings.bottomTab.orders.title}
                </Text>
              ) : null}
            </View>
          ),
          tabBarIcon: ({ color }) => (
            <Image
              resizeMode="contain"
              style={{ tintColor: color, height: wp('6%'), width: wp('6%') }}
              source={Images.ic_order}
            />
          ),
        }}
        component={OrdersStackNavigator}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
