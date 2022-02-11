import { Box, NativeBaseProvider } from "native-base";
import React from "react";

import { Provider } from 'react-redux'
import { store } from './store'
import tw from 'tailwind-rn';
import { LogBox } from "react-native";
import { RootNavigator } from "./navigations/RootNavigator";

LogBox.ignoreLogs ([
  'Setting a timer',
  'AsyncStorage has been extracted from react-native core and will'
])



export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

