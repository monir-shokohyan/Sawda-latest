import { PropsWithChildren, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import {
  DirectionProvider,
  localStorageColorSchemeManager,
  MantineProvider,
} from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { theme } from '@shared/theme'
import { LenisProvider } from './Lenis'
import { ModalsProvider } from '@mantine/modals'
import { PersistGate } from 'redux-persist/integration/react'
import { Loader } from '@shared/ui/loader/Loader'
import { useTranslation } from 'react-i18next'

const RTL_LANGS = ['fa', 'ps']

export const Providers = ({ children }: PropsWithChildren) => {
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr')
  const { i18n } = useTranslation()

  useEffect(() => {
    const updateDir = (language: string) => {
      const isRtl = RTL_LANGS.includes(language)
      setDir(isRtl ? 'rtl' : 'ltr')
      document.documentElement.lang = language
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
    }
    updateDir(i18n.language)
    i18n.on('languageChanged', updateDir)
    return () => i18n.off('languageChanged', updateDir)
  }, [])
  return (
    <BrowserRouter>
      <Provider store={store}>
        <DirectionProvider
          initialDirection={dir}
          detectDirection={false}
        >
          <MantineProvider
            defaultColorScheme="light"
            colorSchemeManager={localStorageColorSchemeManager({
              key: 'my-app-theme',
            })}
            theme={theme}
          >
            <PersistGate
              loading={<Loader />}
              persistor={persistor}
            >
              <ModalsProvider>
                <Notifications />
                <LenisProvider>{children}</LenisProvider>
              </ModalsProvider>
            </PersistGate>
          </MantineProvider>
        </DirectionProvider>
      </Provider>
    </BrowserRouter>
  )
}
