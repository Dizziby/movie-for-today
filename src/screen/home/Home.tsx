import React from 'react';
import { ScrollView, View } from 'react-native';
import PremieresMovie from '../../components/home/PremieresMovie';
import ReleasesMovie from '../../components/home/ReleasesMovie';

const Home = () => {
  return (
    <View>
      <ScrollView>
        <PremieresMovie />
        <ReleasesMovie />
      </ScrollView>
    </View>
  );
};

export default Home;
