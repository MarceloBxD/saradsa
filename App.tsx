import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NativeBaseProvider>
          <MainStack />
        </NativeBaseProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
