import React, { VFC } from 'react'
import { RootStackParamList } from '../types/type'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen } from '../screens/AuthScreen'

const Stack = createNativeStackNavigator<RootStackParamList>();


export const AuthStackNavigator: VFC = () =>
  <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name="Auth" component={AuthScreen} />
  </Stack.Navigator>
