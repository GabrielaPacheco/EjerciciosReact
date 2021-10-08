import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from '../screens/Contact';
const Stack = createStackNavigator();
export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="about"
        component={Contact}
        options={{ title: 'Contact' }}
      />
    </Stack.Navigator>
  );
}