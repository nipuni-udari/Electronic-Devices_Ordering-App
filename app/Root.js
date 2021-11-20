import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {colors} from './global/styles';
import SignInScreen from './screens/authScreens/SignInScreen';
import SignInWelcomeScreen from './screens/authScreens/SignInWelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <SignInWelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
