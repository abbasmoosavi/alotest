import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native';
import { Strings } from '../services/language';
import { FontFamily, Integer } from '../styles';
import { OrdersTab, ProductsTab } from '../screens/home/tabs';

const Stack = createStackNavigator();

const screenOptionStyle = (navigation) => {
  return {
    animationEnabled: true,
    headerStyle: {
      backgroundColor: '#23B3BE',
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
  return (
    <Stack.Navigator initialRouteName="productsTab" screenOptions={screenOptionStyle(navigation)}>
      <Stack.Screen
        name="productsTab"
        options={{ title: Strings.bottomTab.products.title }}
        component={ProductsTab}
      />
    </Stack.Navigator>
  );
};

const OrdersStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="ordersTab" screenOptions={screenOptionStyle(navigation)}>
      <Stack.Screen
        name="ordersTab"
        options={{ title: Strings.bottomTab.orders.title }}
        component={OrdersTab}
      />
    </Stack.Navigator>
  );
};

export { ProductsStackNavigator, OrdersStackNavigator };
