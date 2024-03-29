import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen/HomeScreen.tsx';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchPage from '../../screens/SearchScreen/SearchPage.tsx';
import WatchlistScreen from '../../screens/WatchlistScreen/WatchlistScreen.tsx';
import {View} from 'react-native';
import {styles} from './navigators.style.ts';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen.tsx';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarBackground: () => <View style={styles.tabBarContainer} />,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarLabel: 'Rechercher',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="search-web"
              color={color}
              size={size}
            />
          ),
        }}
        component={SearchPage}
      />
      <Tab.Screen
        name="Watchlist"
        options={{
          tabBarLabel: 'Ma watchlist',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="playlist-play"
              color={color}
              size={size}
            />
          ),
        }}
        component={WatchlistScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Mon profil',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
