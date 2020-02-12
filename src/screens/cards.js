import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

const Cards = ({navigation: {navigate}}) => (
  <SafeAreaView
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text
      style={{
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20,
      }}>
      Home
    </Text>
    <TouchableOpacity
      onPress={() => navigate('ProfileNew')}
      style={{
        width: '90%',
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: 'blue',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <Text>Touch me!</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

export default Cards;
