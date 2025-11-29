import { store } from '@app/store'

declare global {
  declare type RootState = ReturnType<typeof store.getState>
  declare type AppDispatch = typeof store.dispatch
  declare const APP_VERSION: string
}
