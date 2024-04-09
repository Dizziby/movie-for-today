import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../types/types';
import MovieDetails from '../movieDetails/MovieDetails';
import Home from './Home';
import Header from '../../components/common/Header';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={({route}) => ({})}>
        <Stack.Screen
          options={() => ({
            headerStyle: {backgroundColor: '#1b2937'},
            header: ({navigation, route, options}) => {
              return <Header title={'MOVIE FOR TODAY'} />;
            },
          })}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={() => ({
            headerShown: false,
            // headerStyle: {backgroundColor: '#1b2937'},
            // header: ({navigation, route, options}) => {
            //   return <Header title={'MOVIE FOR TODAY'} />;
            // },
          })}
          name="MovieDetails"
          component={MovieDetails}
        />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#f12c4c',
  },
});
