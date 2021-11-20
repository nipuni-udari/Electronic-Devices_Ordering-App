import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, parameters} from '../../global/styles';
import {Icon} from 'react-native-elements';
import Header from '../../components/Header';

export default function SignInScreen(){

    return (
      <View style={styles.container}>
          <Header title="MY ACCOUNT" type="arrow-left" />



        </View>
    )
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