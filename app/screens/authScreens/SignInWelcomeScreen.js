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

      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={require('../../assets/images/4.jpg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={require('../../assets/images/2.jpg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={require('../../assets/images/3.png')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={require('../../assets/images/5.jpg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          </Swiper>
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 50}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styleButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => navigation.navigate('SignInScreen')}
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Create An Account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
}
