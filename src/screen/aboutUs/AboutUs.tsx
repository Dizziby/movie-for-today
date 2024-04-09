import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pavel Kukayeu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    color: '#a6ade3',
  },
});
