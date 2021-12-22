import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.reviewContainer}>
        <Text style={styles.title}>Customer reviews</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 40,
    minWidth: '80%',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowColor: 'rgba(193, 211, 251, 0.5)',
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#323357',
    textAlign: 'center',
  },
});
