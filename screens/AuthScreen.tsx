import React, { VFC } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import tw from 'tailwind-rn'
import { FontAwesome } from '@expo/vector-icons'
import { useFirebaseAuth } from '../hooks/useFirebaseAuth';
import { Button } from '../components/atoms/Button';
import { InputField } from '../components/atoms/InputField';
import { IconButton } from '../components/atoms/IconButton';
import { InputRightAddon } from 'native-base';


export const AuthScreen: VFC = () => {
  const {
    isLogin,
    email,
    password,
    authErr,
    login,
    register,
    setEmail,
    setPassword,
    toggleMode
  } = useFirebaseAuth();

  return (
    <SafeAreaView style={[tw('flex-1 pt-16 items-center'), { backgroundColor: "#008b8b" }]}>
      <FontAwesome name="tasks" size={50} color="white" />
      <Text style={tw('text-2xl text-white mt-2 mb-5 font-semibold')}>
        {isLogin ? 'Login' : 'SignUp'}
      </Text>
      <InputField
        leftIcon="email"
        placeholder="enter Email"
        keyboardType={'email-address'}
        textContentType={'password'}
        autoFocus
        value={email}
        onChangeText={(text: string) => {
          setEmail(text);
        }}
      />
      <InputField
        leftIcon="lock"
        placeholder="enter Password"
        secureTextEntry
        keyboardType={'email-address'}
        textContentType={'password'}
        value={password}
        onChangeText={(text: string) => {
          setPassword(text);
        }}
      />
      {authErr !== '' && (
        <Text style={tw('text-yellow-700 my-3 font-semibold')}>
          {authErr}
        </Text>
      )}

      <Button
        title={isLogin ? 'Login' : 'Register'}
        onPress={isLogin ? login : register}
      />

      <Text style={tw('text-white text-base mb-3 ')}>
        {isLogin ? 'create new account ?' : 'login ?'}
      </Text>
      <IconButton
        name='retweet'
        size={24}
        color='#fff'
        onPress={toggleMode}
      />
    </SafeAreaView>
  )
}
