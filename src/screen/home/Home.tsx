import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import PremieresMovie from '../../components/home/PremieresMovie';
import ReleasesMovie from '../../components/home/ReleasesMovie';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          <PremieresMovie />
          <ReleasesMovie />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b2937',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    color: '#f12c4c',
  },
});
