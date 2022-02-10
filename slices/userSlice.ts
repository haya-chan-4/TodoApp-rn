import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from '../types/type';
import {RootState} from '../store'

type State = {
  user: User
}

const initialState: State = {
  user: { uid: '', email: '', }
}

/** 今回はloginとlogoutのアクションを作成する */
/** loginはuserの認証に成功した場合user情報をStateに格納する処理 */
/** logoutはuserのStateを初期化する処理 */

export const userSlice = createSlice({
  name: 'user',
  initialState, /**二つ目の属性には必ずinitialStateを渡す必要がある */
  reducers: {
    /** actionのPayloadで受け取ったuserのstateをstate.userに格納する処理 **/
    login: (state,action: PayloadAction<User>) => {
      state.user = action.payload
    },
    logout: (state) => {
      /**userのstateを初期化する処理 */
      state.user = initialState.user;
    }
  }
})

export const {login, logout} = userSlice.actions;
export const selectUser = (state:RootState) => state.user.user
export default userSlice.reducer;
