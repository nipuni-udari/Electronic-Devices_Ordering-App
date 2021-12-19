import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import MapView from 'react-native-maps';
import {colors, parameters, title} from '../global/styles';
import {Marker} from 'react-native-maps';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import TitleBar from '../constants/TitleBar';
export default function MapScreen({navigation}) {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.view1}>
        <Icon
          name="arrow-left"
          type="material-community"
          color={colors.black}
          size={25}
          onPress={() => navigation.goBack()}
        />
      </View>

      <MapView
        style={styles.mapStyle}
        showsUserLocation={false}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 6.928365633030097,
          longitude: 79.89499658264656,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 6.928365633030097,
            longitude: 79.89499658264656,
          }}
          title={'JavaTpoint'}
          description={'Java Training Institute'}
        />
      </MapView>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <Button
          title="Save location"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  createButton: {
    borderWidth: 1,
    borderColor: colors.black,

    height: 50,
    borderRadius: 12,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 60,
    marginBottom: 50,
  },

  createButtonTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
