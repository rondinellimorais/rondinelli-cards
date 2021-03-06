import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

const ProfileNew = ({navigation: {navigate}}) => (
  <SafeAreaView
    style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text
      style={{
        color: 'blue',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20,
      }}>
      Veio para o Profile tranquilo
    </Text>
    <TouchableOpacity
      onPress={() => navigate('Cards')}
      style={{
        width: '90%',
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: 'blue',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <Text>Back</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

export default ProfileNew;
