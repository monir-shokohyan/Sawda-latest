import { PropsWithChildren } from 'react'
import { App, ConfigProvider } from 'antd'
import locale from 'antd/locale/ru_RU'

import 'antd/dist/reset.css'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider locale={locale}>
      <App>{children}</App>
    </ConfigProvider>
  )
}
