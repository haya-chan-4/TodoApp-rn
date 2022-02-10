import React, { VFC } from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn'

type Props = {
  first: string,
  last: string,
}

export const Title: VFC<Props> = (props) => {
  const { first, last } = props;

  return (
    <View style={tw('my-6 px-1 flex-row')}>
      <View style={tw('mr-1 flex-1 border self-center border-green-600')} />
      <Text style={tw('extra-bold text-gray-700 text-3xl')}>
        {`${first}`}
        <Text style={tw('font-light text-green-600')}>{last}</Text>
      </Text>
      <View style={tw('ml-1 flex-1 border self-center border-green-600')} />
    </View>
  )
}
