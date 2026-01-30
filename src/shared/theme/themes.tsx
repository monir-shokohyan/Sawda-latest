import {
  createTheme,
  virtualColor,
  colorsTuple,
  Menu,
  Input,
  Select,
  Modal,
  Button,
  ActionIcon,
  Drawer,
  Paper,
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
const darkTextC: MantineColorsTuple = colorsTuple('#000')
const lightText: MantineColorsTuple = colorsTuple('#FFFFFF')
const demLightText: MantineColorsTuple = colorsTuple('#C9C9C9')

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
    darkTextC,
    demLightText,

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
    darkText: virtualColor({
      name: 'darkText',
      light: 'grayText',
      dark: 'lightText',
    }),
    demText: virtualColor({
      name: 'demText',
      light: 'grayText',
      dark: 'demLightText',
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
          borderRadius: '5px',
        },
      }),
    }),
    Select: Select.extend({
      styles: (theme) => ({
        dropdown: {
          background: theme.colors.background[8],
          borderRadius: '5px',
        },
      }),
    }),
    Drawer: Drawer.extend({
      styles: (theme) => ({
        content: {
          background: theme.colors.background[8],
        },
        body: {
          padding: '0px',
          background: theme.colors.background[7],
        },
        header: {
          background: theme.colors.background[7],
        },
      }),
    }),
    Button: Button.extend({
      styles: () => ({
        root: {
          borderRadius: '5px',
        },
      }),
    }),
    ActionIcon: ActionIcon.extend({
      styles: () => ({
        root: {
          borderRadius: '5px',
        },
      }),
    }),
    Input: Input.extend({
      styles: (theme) => ({
        input: {
          backgroundColor: theme.colors.background[8],
          borderRadius: '5px',
        },

        wrapper: {},
      }),
    }),
    Modal: Modal.extend({
      styles: (theme) => ({
        header: {
          backgroundColor: theme.colors.background[8],
        },
        content: {
          backgroundColor: theme.colors.background[9],
        },
        body: {
          padding: '0px',
        },
        title: {
          fontSize: '20px',
          color: theme.colors.darkText[8],
          fontWeight: 500,
        },
      }),
    }),
  },
})
