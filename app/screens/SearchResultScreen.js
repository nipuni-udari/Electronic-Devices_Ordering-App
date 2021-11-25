import React from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import {shopsData} from '../global/Data';
import {colors} from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.listHeader}>
          {shopsData.length} Result for {route.params.item}
        </Text>
      </View>
      <SearchResultCard
        screenWidth={SCREEN_WIDTH}
        images={shopsData[0].images}
        averageReview={shopsData[0].averageReview}
        numberOfReview={shopsData[0].numberOfReview}
        shopName={shopsData[0].shopName}
        farAway={shopsData[0].farAway}
        businessAddress={shopsData[0].businessAddress}
        //productData={shopsData[0].productData}
        //OnPressRestaurantCard={() => {
        //navigation.navigate('RestaurantHomeScreen', {
        //id: index,
        //restaurant: item.shopName,
        //});
        //}}
      />
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
