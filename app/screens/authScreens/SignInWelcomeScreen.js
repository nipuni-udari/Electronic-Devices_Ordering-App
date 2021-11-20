import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import Swiper from 'react-native-swiper';

export default function SignInWelcomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          Discover The E-Shops
        </Text>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          In Your Area
        </Text>
      </View>

      
    </View>
  );
}
