import { createTheme, virtualColor, colorsTuple } from '@mantine/core'
import type { MantineColorsTuple } from '@mantine/core'

const blueAccent: MantineColorsTuple = [
  '#e5f3ff',
  '#cce8ff',
  '#99d1ff',
  '#66bbff',
  '#33a4ff',
  '#0F84F0',
  '#0078d4',
  '#0063ba',
  '#004ea1',
  '#003988',
]

const originalBlue: MantineColorsTuple = colorsTuple('#366FB4')
const greenAccent: MantineColorsTuple = colorsTuple('#30B352')
const lightBg: MantineColorsTuple = colorsTuple('#EBEAE8')
const darkBg: MantineColorsTuple = colorsTuple('#1C1C1E')
const darkSurface: MantineColorsTuple = colorsTuple('#2B2B2D')
const grayText: MantineColorsTuple = colorsTuple('#686968')

const lightText: MantineColorsTuple = colorsTuple('#FFFFFF')

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  defaultRadius: 'md',
  primaryColor: 'primary',

  colors: {
    blueAccent,
    originalBlue,
    greenAccent,
    lightBg,
    darkBg,
    darkSurface,
    grayText,
    lightText,

    primary: virtualColor({
      name: 'primary',
      light: 'originalBlue',
      dark: 'blueAccent',
    }),

    background: virtualColor({
      name: 'background',
      light: 'lightBg',
      dark: 'darkBg',
    }),

    surface: virtualColor({
      name: 'surface',
      light: 'lightBg',
      dark: 'darkSurface',
    }),

    textPrimary: virtualColor({
      name: 'textPrimary',
      light: 'grayText',
      dark: 'lightText',
    }),

    textSecondary: virtualColor({
      name: 'textSecondary',
      light: 'grayText',
      dark: 'grayText',
    }),

    navbarBg: virtualColor({
      name: 'navbarBg',
      light: 'lightBg',
      dark: 'darkBg',
    }),
  },
})
