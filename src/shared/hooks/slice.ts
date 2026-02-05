import { createSlice } from '@reduxjs/toolkit'

interface State {
  isAuth: boolean
}

const initialState: State = {
  isAuth: false,
}

const Slice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    activeAuth(state) {
      state.isAuth = true
    },
    deactiveAuth(state) {
      state.isAuth = false
    },
    toggleAuth(state) {
      state.isAuth = !state.isAuth
    },
  },
})

export const {
  activeAuth,
  deactiveAuth,
  toggleAuth,
} = Slice.actions

export const reducer = Slice.reducer
export const selector = (state: RootState) => state.Auth.isAuth
