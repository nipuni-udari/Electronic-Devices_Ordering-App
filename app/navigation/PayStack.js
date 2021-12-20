import React, {useLayoutEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import PaymentScreen from '../screens/PaymentScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';

const PaySearch = createStackNavigator();

export function PayStack({navigation, route}) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'MyOrdersScreen' || 'PaymentScreen') {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

  return (
    <PaySearch.Navigator>
      <PaySearch.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <PaySearch.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </PaySearch.Navigator>
  );
}
