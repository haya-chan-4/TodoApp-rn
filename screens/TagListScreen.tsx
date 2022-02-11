import React, { VFC } from 'react'
import { View, Text, Alert, SafeAreaView } from 'react-native'
import tw from 'tailwind-rn'
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../firebaseConfig';
import { logout, selectUser } from '../slices/userSlice';
import { IconButton } from '../components/atoms/IconButton';
import {Box} from 'native-base'


type Props = {

}

export const TagListScreen = () => {
  /** reduxの中にあるユーザー情報を取得する処理 **/
  const user = useSelector(selectUser);
  /** logoutのアクションを実行したい **/
  const dispatch = useDispatch();
  const signOut = async () => {
    try {
      await auth.signOut();
      dispatch(logout);
    }
    catch {
      Alert.alert('logout error')
    }
  }

  return (
    <SafeAreaView style={[tw('flex-1 items-center mt-5')]}>
      <Text>{user.email}</Text>
      <IconButton name="logout" color='blue' size={20} onPress={signOut}  />
    </SafeAreaView>
  )
}
