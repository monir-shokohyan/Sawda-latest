import { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { AdminRefineProvider } from './refine-dev'
import { localStorageColorSchemeManager, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { theme } from '@shared/theme'
import { LenisProvider } from './Lenis'
import { ModalsProvider } from '@mantine/modals'

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
          <ModalsProvider>
            <Notifications />
            <AdminRefineProvider>
              <LenisProvider>{children}</LenisProvider>
            </AdminRefineProvider>
          </ModalsProvider>
        </MantineProvider>
      </Provider>
    </BrowserRouter>
  )
}
