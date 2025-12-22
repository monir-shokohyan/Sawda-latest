import { createSlice } from '@reduxjs/toolkit'

interface NavbarState {
  collapsed: boolean
}

const initialState: NavbarState = {
  collapsed: false,
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    collapseNavbar(state) {
      state.collapsed = true
    },
    unCollapseNavbar(state) {
      state.collapsed = false
    },
    toggleCollapseNavbar(state) {
      state.collapsed = !state.collapsed
    },
  },
})

export const { collapseNavbar, unCollapseNavbar, toggleCollapseNavbar } =
  navbarSlice.actions

export const reducer = navbarSlice.reducer
export const selector = (state: RootState) => state.navbar.collapsed
