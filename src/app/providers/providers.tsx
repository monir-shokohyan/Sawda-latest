import { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { AdminRefineProvider } from './refine-dev'
import { localStorageColorSchemeManager, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { theme } from '@shared/theme'
import { LenisProvider } from './Lenis'
import { ModalsProvider } from '@mantine/modals'
import { PersistGate } from 'redux-persist/integration/react'
import { Loader } from '@shared/ui/loader/Loader'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MantineProvider
          defaultColorScheme="light"
          colorSchemeManager={localStorageColorSchemeManager({
            key: 'my-app-theme',
          })}
          theme={theme}
        >
          <PersistGate loading={<Loader />} persistor={persistor}>
          <ModalsProvider>
            <Notifications />
            <AdminRefineProvider>
              <LenisProvider>{children}</LenisProvider>
            </AdminRefineProvider>
          </ModalsProvider>
        </PersistGate>
        </MantineProvider>
      </Provider>
    </BrowserRouter>
  )
}
