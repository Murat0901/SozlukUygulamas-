import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homePageView from './views/homePageView';
import settingsView from './views/settingsView';
import historyView from './views/historyView';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={homePageView} />
        <Tab.Screen name="Settings" component={settingsView} />
        <Tab.Screen name="History" component={historyView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
