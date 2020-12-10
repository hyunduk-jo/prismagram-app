import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Message from '../screens/Message/Message';
import Messages from '../screens/Message/Messages';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  )
}