import {
  createTheme,
  virtualColor,
  colorsTuple,
  Menu,
  Input,
  Select,
} from '@mantine/core'
import type { MantineColorsTuple } from '@mantine/core'

const darkAccent: MantineColorsTuple = [
  '#FFFFFF',
  '#F0F8FF',
  '#B3E5FC',
  '#81D4FA',
  '#4d9adf',
  '#325a82',
  '#2c4f73',
  '#242d3b',
  '#172029',
  '#0f1520',
]
const lightAccent: MantineColorsTuple = [
  '#FFFFFF',
  '#F0F8FF',
  '#B3E5FC',
  '#81D4FA',
  '#29B6F6',
  '#0088CC',
  '#458dd1',
  '#FFFFFF',
  'rgb(255, 255, 255)',
  'rgb(245, 245, 245)',
]

const originalBlue: MantineColorsTuple = colorsTuple('#366FB4')
const originalBlueHover: MantineColorsTuple = colorsTuple('#b43636')
const greenAccent: MantineColorsTuple = colorsTuple('#30B352')
const lightBg: MantineColorsTuple = colorsTuple('rgb(245, 245, 245)')
const darkBg: MantineColorsTuple = colorsTuple('#130F49')
const lightSurface: MantineColorsTuple = colorsTuple('#FFFFFF')
const darkSurface: MantineColorsTuple = colorsTuple('#121B5B')
const grayText: MantineColorsTuple = colorsTuple('#686968')
const grayBg: MantineColorsTuple = colorsTuple('#EBEAE8')

const lightText: MantineColorsTuple = colorsTuple('#FFFFFF')

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  defaultRadius: 'md',
  primaryColor: 'primary',

  colors: {
    darkAccent,
    lightAccent,
    originalBlue,
    greenAccent,
    lightBg,
    darkBg,
    darkSurface,
    grayText,
    lightText,
    lightSurface,
    originalBlueHover,
    grayBg,

    primary: virtualColor({
      name: 'primary',
      light: 'originalBlue',
      dark: 'originalBlue',
    }),
    buttonColor: virtualColor({
      name: 'buttonColor',
      light: 'originalBlue',
      dark: 'orginalBlue',
    }),

    background: virtualColor({
      name: 'background',
      light: 'lightAccent',
      dark: 'darkAccent',
    }),
    backgroundInput: virtualColor({
      name: 'backgroundInput',
      light: 'grayBg',
      dark: 'grayBg',
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
  components: {
    Menu: Menu.extend({
      styles: (theme) => ({
        dropdown: {
          background: theme.colors.background[7],
        },
      }),
    }),
    Select: Select.extend({
      styles: (theme) => ({
        dropdown: {
          background: theme.colors.background[8],
        },
      }),
    }),
    Input: Input.extend({
      styles: (theme) => ({
        input: {
          backgroundColor: theme.colors.background[8],
        },
        wrapper: {},
      }),
    }),
  },
})
