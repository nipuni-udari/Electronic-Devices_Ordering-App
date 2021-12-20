import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, Image, TextInput} from 'react-native';
import {colors, parameters, title} from '../global/styles';
import LinearGradient from 'react-native-linear-gradient';
import TitleBar from '../constants/TitleBar';

export default class SuccessMsgScreen extends Component {
  render() {
    return (
      <>
        <View style={styles.root}>
          <View style={styles.body}>
            <TitleBar />
            {/* <LinearGradient colors={['green', '#6ABD0D']} style={styles.gradients}> */}
            <View
              style={{
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 0,
                backgroundColor: '#9013fe',
              }}>
              <Text style={styles.payment}>Thanks For Ordering</Text>
            </View>
            {/* </LinearGradient> */}
          </View>
          <View style={styles.header}>
            <View style={styles.wraplogo}>
              <Image
                style={styles.logo}
                source={require('../assets/images/ok.png')}
              />
            </View>
          </View>
          <View style={{marginHorizontal: 50, marginTop: 30, marginBottom: 10}}>
            <Button
              title="Save your Delivery location"
              buttonStyle={styles.createButton}
              titleStyle={styles.createButtonTitle}
              active
              onPress={() => this.props.navigation.navigate('HomeScreen')}
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  payment: {
    fontSize: 30,
    fontWeight: 'bold',
    // color: 'white'
  },
  logo: {
    width: '100%',
    height: 300,
    // flex: 1,
  },
  gradients: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    backgroundColor: '#F7F8F3',
    justifyContent: 'center',
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
