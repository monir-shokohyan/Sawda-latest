import { createSlice } from '@reduxjs/toolkit'

interface SettingDropDownState {
  collapsed: boolean
}

const initialState: SettingDropDownState = {
  collapsed: false,
}

const settingDropDownSlice = createSlice({
  name: 'settingDropDown',
  initialState,
  reducers: {
    collapseSettingDropDown(state) {
      state.collapsed = true
    },
    unCollapseSettingDropDown(state) {
      state.collapsed = false
    },
    toggleCollapseSettingDropDown(state) {
      state.collapsed = !state.collapsed
    },
  },
})

export const { collapseSettingDropDown, unCollapseSettingDropDown, toggleCollapseSettingDropDown } =
  settingDropDownSlice.actions

export const reducer = settingDropDownSlice.reducer
export const selector = (state: RootState) => state.settingDropDown.collapsed
