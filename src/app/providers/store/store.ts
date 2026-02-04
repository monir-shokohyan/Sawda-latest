import { SettingDropDownReducer } from '@features/mobile-model/reducers'
import { configureStore } from '@reduxjs/toolkit'
import { AuthReducer } from '@shared/hooks'
import { NavbarReducer } from '@shared/reducers'

export const store = configureStore({
  reducer: {
    navbar: NavbarReducer,
    settingDropDown: SettingDropDownReducer,
    Auth: AuthReducer
  },
  
})
