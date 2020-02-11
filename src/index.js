import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

const Home = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.microFontText}>Home => Micro front</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  microFontText: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default Home;
