import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ShopHeader from '../components/ShopHeader';

const ShopHomeScreen = ({navigation, route}) => {
  const {id, shop} = route.params;
  return (
    <View>
      <ShopHeader id={id} navigation={navigation}/>
    </View>
  );
};

export default ShopHomeScreen;

const styles = StyleSheet.create({});
