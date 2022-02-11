import React, { VFC } from 'react'
import { RootStackParamList } from '../types/type'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TagListScreen } from '../screens/TagListScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const TagStackNavigator: VFC = () =>
  <Stack.Navigator>
    <Stack.Screen name='TagList' component={TagListScreen} />
  </Stack.Navigator>
