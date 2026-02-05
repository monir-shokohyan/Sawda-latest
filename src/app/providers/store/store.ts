import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { SettingDropDownReducer } from '@features/mobile-model/reducers'
import { NavbarReducer } from '@shared/reducers'
import { AuthReducer } from '@shared/hooks'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['Auth'],
  blacklist: ['navbar', 'settingDropDown'],
}

const rootReducer = combineReducers({
  navbar: NavbarReducer,
  settingDropDown: SettingDropDownReducer,
  Auth: AuthReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
