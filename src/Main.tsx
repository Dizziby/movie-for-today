import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from './types/types';
import {Home} from './screen/home/Home';
import {AboutUs} from './screen/aboutUs/AboutUs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Top} from './screen/top/Top';
import {Filters} from './screen/filters/Filters';
import {Search} from './screen/search/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './components/common/Header';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const Main = (): ReactElement => (
  <View style={styles.container}>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Top':
              iconName = 'bar-chart-outline';
              break;
            case 'Filters':
              iconName = 'filter-outline';
              break;
            case 'Search':
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
        tabBarActiveTintColor: '#f12c4c',
        tabBarInactiveTintColor: '#646d79',
        // tabBarActiveBackgroundColor: '#1b2937',
        // tabBarInactiveBackgroundColor: '#1b2937',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {backgroundColor: '#1b2937'},
        headerStyle: {backgroundColor: '#1b2937'},
        header: ({navigation, route, options}) => {
          return <Header />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen name="Top" component={Top} options={{title: 'Top'}} />
      <Tab.Screen
        name="Filters"
        component={Filters}
        options={{title: 'Filters'}}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{title: 'Search'}}
      />
      <Tab.Screen
        name="AboutUs"
        component={AboutUs}
        options={{title: 'About us'}}
      />
    </Tab.Navigator>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
