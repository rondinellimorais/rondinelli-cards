import React from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';

const Cards = ({ navigation: { navigate } }) => (
  <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>Home</Text>
    <TouchableOpacity onPress={() => navigate('ProfileNew')} style={{ paddingVertical: 20, borderWidth: 1, borderColor: 'blue' }}>
      Profile
    </TouchableOpacity>
  </SafeAreaView>
);

export default Cards;
