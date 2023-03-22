import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MOVIE FOR TODAY</Text>
      <View style={styles.icons}>
        <Ionicons name={'heart-outline'} size={25} color={'#646d79'} />
        <Ionicons
          name={'chatbubble-ellipses-outline'}
          size={25}
          color={'#646d79'}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#1b2937',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#646d79',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  title: {
    color: '#646d79',
    fontSize: 16,
  },
});
