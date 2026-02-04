import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  isAuth: boolean
}

const initialState: AuthState = {
  isAuth: false,
}

const Slice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    activeAuth(state) {
      state.isAuth = true
    },
    deActiveAuth(state) {
      state.isAuth = false
    },
    toggleAuth(state) {
      state.isAuth = !state.isAuth
    },
  },
})

export const {
  activeAuth,
  deActiveAuth,
  toggleAuth,
} = Slice.actions

export const reducer = Slice.reducer
export const selector = (state: RootState) => state.Auth.isAuth
