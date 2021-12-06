import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import ElectronicStoresMapScreen from '../screens/ElectronicStoresMapScreen';

const App = createStackNavigator();

export function AppStack() {
  return (
    <App.Navigator>
      <App.Screen
        name="App"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <App.Screen
        name="ElectronicStoresMapScreen"
        component={ElectronicStoresMapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </App.Navigator>
  );
}
