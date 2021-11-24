import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  ImageBackgroundComponent,
} from 'react-native';
import SearchComponent from '../components/SearchComponent';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen() {
  return (
    <View style={{flex: 1, marginBottom: 10, paddingTop: 20}}>
      <SearchComponent />
    </View>
  );
}
