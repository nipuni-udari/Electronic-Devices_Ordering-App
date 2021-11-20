import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, parameters} from '../../global/styles';
import {Icon} from 'react-native-elements';
import Header from '../../components/Header';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Sign-In</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={textInput1}
          />
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Fossued ? '' : 'fadeInLeft'}
            duration={100}>
            <Icon
              name="lock"
              iconStyle={{color: color.grey3}}
              type="material"
            />
          </Animatable.View>
        <TextInput
            style={{width: '80%'}}
            placeholder="Password"
            ref={textInput2}
            onFocus={() => {
              setTextInput2Fossued(false);
            }}
            onBlur={() => {
              setTextInput2Fossued(true);
            }}
          />
          <Animatable.View
            animation={textInput2Fossued ? '' : 'fadeInLeft'}
            duration={100}>
            <Icon
              name="visibility-off"
              iconStyle={{color: color.grey3}}
              type="material"
              style={{marginRight: 20}}
            />
          </Animatable.View>
            
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
    paddingTop: 12,
  },

  TextInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    allignContent: 'center',
    allignItems: 'center',
    paddingTop: 4,
    paddingLeft: 5,
  },

  SocialIcon: {
    borderRadius: 10,
    height: 50,
  },

  createButton: {
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    borderRadius: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    allignContent: 'center',
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    allignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
