import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MainStack />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
