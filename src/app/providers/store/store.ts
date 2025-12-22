import { configureStore } from '@reduxjs/toolkit'
import { NavbarReducer } from '@shared/reducers'


export const store = configureStore({
  reducer: {
    navbar: NavbarReducer,
  },
})
