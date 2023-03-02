import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';
import CadasterScreen from '../pages/CadasterScreen';
import ScheduleScreen from '../pages/ScheduleScreen';
import LoginScreen from '../pages/LoginScreen';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: 'purple'},
      }}>
      <Stack.Screen
        options={{
          title: 'DsaOdonto',
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
      <Stack.Screen name="Cadaster" component={CadasterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
