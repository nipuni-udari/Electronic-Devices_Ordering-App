import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const MapScreen=()=>{
  function renderMap(){
    return(
      <View  style={{flex:1}}>
        <MapView
        style={{flex:1}}
        >

        </MapView>

      </View>
    )
  }
  return(
    <View style={{flex:1}}>
      {renderMap()}
  
    </View>
  )



}
export default MapScreen;

