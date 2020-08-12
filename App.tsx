import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {AuthProvider} from './src/contexts/auth'

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer
    
    >
      <AuthProvider>
        <Routes />
        <StatusBar style="auto" />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
