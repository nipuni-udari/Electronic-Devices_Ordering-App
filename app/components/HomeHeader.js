import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import {colors, parameters} from '../global/styles';

export default function HomeHeader({}){
    return(
        <View style={StyleSheet.header}>

        </View>
    );
}


const styles = StyleSheet.create({

    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
        justifyContent:'space-between'
    }
});