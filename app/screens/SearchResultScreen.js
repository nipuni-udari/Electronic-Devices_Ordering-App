import React from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';

import {restaurantsData} from '../global/Data';
import {colors} from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>search result for{route.params.item}</Text>
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },

  listHeader: {
    color: colors.grey1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
});
