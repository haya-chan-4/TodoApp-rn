import { useState } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebaseConfig'

export const useFirebaseAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [authErr, setAuthErr] = useState('');

  const login = async () => {   /*login処理*/
    try {     /**login処理の通信が成功した場合 */
      setAuthErr('');
      if (email !== '' && password !== '') {
        await signInWithEmailAndPassword(auth, email, password)
      }
    } catch (err: any) {     /** login処理が失敗した場合 **/
      setAuthErr(err.message);
      setEmail('');
      setPassword('');
    }
  }

  const register = async () => {  /*signIn処理*/
    try {
      setAuthErr('');
      if (email !== '' && password !== '') {
        await createUserWithEmailAndPassword(auth, email, password)
      }
    } catch (err: any) {
      setAuthErr(err.message);
      setEmail('');
      setPassword('');
    }
  }

  const toggleMode = async () => {
    setIsLogin(!login);
    setAuthErr('');
  };

  return {
    isLogin,
    email,
    password,
    authErr,
    login,
    register,
    setEmail,
    setPassword,
    toggleMode
  }
}
