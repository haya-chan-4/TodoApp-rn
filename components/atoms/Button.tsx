import {
  TouchableOpacity,
  Text,
  GestureResponderEvent
} from 'react-native'
import React, { VFC } from 'react'
import tw from 'tailwind-rn'
// import { Button } from "native-base";


type Props = {
  title: string,
  bgColor?: string,
  titleColor?: string,
  onPress: (e: GestureResponderEvent) => void,
}

export const Button: VFC<Props> = (props) => {
  const {
    title,
    bgColor = 'bg-gray-500',
    titleColor = 'text-white',
    onPress
  } = props;
  return (
    <TouchableOpacity
    style={tw(`rounded-3xl mb-4 mx-3 w-11/12 ${bgColor}`)}
    onPress={onPress}
    >
      <Text style={tw(`${titleColor} text-center text-lg font-semibold`)}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}


