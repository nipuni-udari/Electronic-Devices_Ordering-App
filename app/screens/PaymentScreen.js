import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Button, TextInput} from 'react-native';
import {colors, parameters, title} from '../global/styles';
import MyOrdersScreen from './MyOrdersScreen';
import TitleBar from '../constants/TitleBar';

export default class PaymentScreen extends Component {
  render() {
    return (
      <>
        <View style={styles.root}>
          <View style={styles.header}>
            <TitleBar />
            <View style={styles.wraplogo}>
              <Image
                style={styles.logo}
                source={require('../assets/images/Card.jpg')}
              />
            </View>
          </View>
          <View style={styles.body}>
            <View
              style={{
                backgroundColor: '#F8F8F8',
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.payment}>TOTAL PAYMENT</Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                height: 90,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.total}>LKR 62,000.000</Text>
            </View>
            <View>
              <Button
                title="Confirm Payment"
                buttonStyle={styles.createButton}
                titleStyle={styles.createButtonTitle}
                active
                onPress={() => this.props.navigation.navigate(MyOrdersScreen)}
              />
            </View>
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
  body: {
    flex: 1,
  },
  logo: {
    width: '100%',
    height: 500,
  },
  search: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    height: 50,
    paddingLeft: 60,
    paddingRight: 14,
    backgroundColor: '#fff',
  },
  iconsearch: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: 15,
    left: 20,
  },
  header: {
    backgroundColor: '#188168',
  },
  wrapsearch: {marginHorizontal: 30},
  payment: {
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  total: {
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#075E54',
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
    marginBottom: 20,
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
