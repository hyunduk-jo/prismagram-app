import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import Confirm from '../screens/Auth/Confirm';
import AuthHome from '../screens/Auth/AuthHome';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthHome" headerMode="float" >
        <Stack.Screen name="AuthHome" component={AuthHome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Confirm" component={Confirm} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}