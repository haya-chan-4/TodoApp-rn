import {
  TouchableOpacity,
  GestureResponderEvent
} from 'react-native'
import React, { VFC } from 'react'
import tw from 'tailwind-rn'
import { AntDesign } from '@expo/vector-icons';

// nameの部分をtitleに変更
type Props = {
  title: string,
  size: number,
  color: string,
  onPress: (e: GestureResponderEvent) => void,
}

export const IconButton: VFC<Props> = (props) => {
  const { title, size, color, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={tw('items-center')}>
      <AntDesign title={title} size={size} color={color} />
    </TouchableOpacity>
  )
}
