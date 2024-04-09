import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from './types/types';
import {HomeScreen} from './screen/home/HomeScreen';
import {AboutUs} from './screen/aboutUs/AboutUs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Top} from './components/top/Top';
import {Filters} from './components/filters/Filters';
import {Search} from './components/search/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './components/common/Header';
import {FiltersScreen} from './screen/filters/FiltersScreen';
import {TopScreen} from './screen/top/TopScreen';
import {SearchScreen} from './screen/search/SearchScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const Main = (): ReactElement => (
  <View style={styles.container}>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home-outline';
              break;
            case 'TopScreen':
              iconName = 'bar-chart-outline';
              break;
            case 'FiltersScreen':
              iconName = 'filter-outline';
              break;
            case 'SearchScreen':
              iconName = 'search-outline';
              break;
            case 'AboutUs':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'ban-outline';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#a6ade3',
        tabBarInactiveTintColor: '#646d79',
        // tabBarActiveBackgroundColor: '#1b2937',
        // tabBarInactiveBackgroundColor: '#1b2937',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {backgroundColor: '#2b2c30'},
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TopScreen"
        component={TopScreen}
        options={{
          title: 'Top',
          headerStyle: {
            backgroundColor: '#2b2c30',
            height: 50,
          },
          headerTitleStyle: {
            color: '#a6ade3',
          },
        }}
      />
      <Tab.Screen
        name="FiltersScreen"
        component={FiltersScreen}
        options={{
          title: 'Filters',
          headerStyle: {
            backgroundColor: '#2b2c30',
            height: 50,
          },
          headerTitleStyle: {
            color: '#a6ade3',
          },
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: 'Search',
          headerStyle: {
            backgroundColor: '#2b2c30',
            height: 50,
          },
          headerTitleStyle: {
            color: '#a6ade3',
          },
        }}
      />
      <Tab.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          title: 'About us',
          headerStyle: {
            backgroundColor: '#2b2c30',
            height: 50,
          },
          headerTitleStyle: {
            color: '#a6ade3',
          },
        }}
      />
    </Tab.Navigator>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
