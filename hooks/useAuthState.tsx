// Userのlogin情報を監視するためのロジック

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { selectUser, login, logout } from '../slices/userSlice'


export const useAuthState = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false); /**firebaseの通信状況を管理 */

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      setIsLoading(true);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email!,
          }),
        )
      } else {
        dispatch(logout());
      }
      setIsLoading(false);
    });
    return () => {
      unsub();
    }
  }, []);
  return {
    user,
    isLoading,
  }
}

