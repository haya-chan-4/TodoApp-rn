import React, { VFC } from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'

type Props = {
  leftIcon: any,
  iconColor: string,
  placeholder: string,
  placeholderTextColor: string,
  secureTextEntry: boolean | undefined,
  keyboardType: "email-address" | "default",
  textContentType: "emailAddress" | "password" | "name",
  autoFocus: boolean | undefined,
  value: string,
  onChangeText: (value: string) => void,
}

export const InputField: VFC<Props> = (props) => {
  const {
    leftIcon,
    iconColor,
    placeholder,
    placeholderTextColor,
    secureTextEntry,
    keyboardType,
    textContentType,
    autoFocus,
    value,
    onChangeText,
  } = props;

  return (
    <View style={tw('mb-5 mx-3 flex-row p-3 w-11/12 bg-white rounded')}>
      {leftIcon ? (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color={iconColor}
          style={tw('mr-3')}
        />
      ) : null}
      <TextInput
        style={tw('w-full')}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        textContentType={textContentType}
        autoCapitalize="none"
        autoFocus={autoFocus}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
      />
    </View>
  )
}

