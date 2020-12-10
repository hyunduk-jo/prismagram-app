import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Tabs/Home';
import Search from '../screens/Tabs/Search';
import Notification from '../screens/Tabs/Notification';
import Profile from '../screens/Tabs/Profile';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MessagesLink from '../components/MessagesLink';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const stackFactory = (initialRoute, name, customConfig) => (
  <Stack.Navigator>
    <Stack.Screen name={name} component={initialRoute} options={{ ...customConfig }} />
  </Stack.Navigator>
)

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">
        {
          () => stackFactory(Home, "Home", { headerRight: () => <MessagesLink /> })
        }
      </Tab.Screen>
      <Tab.Screen name="Search">
        {
          () => stackFactory(Search, "Search", { title: "Search" })
        }
      </Tab.Screen>
      <Tab.Screen
        name="Add"
        component={View}
        listeners={({ navigation: { navigate } }) => ({ tabPress: (e) => { e.preventDefault(); navigate("PhotoNavigation"); } })}
      />
      <Tab.Screen name="Notification">
        {
          () => stackFactory(Notification, "Notification", { title: "Notification" })
        }
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {
          () => stackFactory(Profile, "Profile", { title: "Profile" })
        }
      </Tab.Screen>
    </Tab.Navigator>
  )
}