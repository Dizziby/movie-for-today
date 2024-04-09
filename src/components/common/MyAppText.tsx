import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';

const MyAppText = ({children}: {children: ReactNode}) => {
  return <Text style={styles.container}>{children}</Text>;
};

export default MyAppText;

const styles = StyleSheet.create({
  container: {
    fontFamily: "Manrope"
  },
});