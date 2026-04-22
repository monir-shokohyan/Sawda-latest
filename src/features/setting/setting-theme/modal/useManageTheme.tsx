import { useMantineColorScheme } from '@mantine/core'
import { useTranslation } from 'react-i18next'

const useManageTheme = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme()
  const { t } = useTranslation()

  const ThemeObj = [
    {
      textFooter: 'theme.system',
      src: '/mode/systemTheme.svg',
      alt: 'System default theme preview',
      handleClick: () => setColorScheme('auto'),
      active: colorScheme === 'auto',
    },
    {
      textFooter: 'theme.light',
      src: '/mode/lightTheme.svg',
      alt: 'Light theme preview',
      handleClick: () => setColorScheme('light'),
      active: colorScheme === 'light',
    },
    {
      textFooter: 'theme.dark',
      src: '/mode/darkTheme.svg',
      alt: 'Dark theme preview',
      handleClick: () => setColorScheme('dark'),
      active: colorScheme === 'dark',
    },
  ] as const
  const modifiedThemeObj = ThemeObj.map(theme=>({
    ...theme,
    textFooter: t(theme.textFooter)
  }))

  return {
    modifiedThemeObj,
    colorScheme,
    t,
  }
}

export { useManageTheme }
