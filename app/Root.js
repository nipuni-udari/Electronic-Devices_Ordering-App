import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {colors} from './global/styles';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <Header title="MY ACCOUNT" type="arrow-left" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
