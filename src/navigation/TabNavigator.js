import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Strings } from '../services/language';
import { FontFamily, Integer } from '../styles';
import { OrdersStackNavigator, ProductsStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator backBehavior="initialRoute" animationEnabled initialRouteName="Products">
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
          tabBarIcon: ({ color, size }) => (
            <Icon
              fontSize={size}
              type="MaterialIcons"
              name="person"
              style={{
                color,
              }}
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
          tabBarIcon: ({ color, size }) => (
            <Icon
              fontSize={size}
              type="MaterialIcons"
              name="person"
              style={{
                color,
              }}
            />
          ),
        }}
        component={OrdersStackNavigator}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
