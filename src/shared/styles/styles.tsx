import {
  ActionIcon,
  ActionIconProps,
  Button,
  ButtonProps,
  createPolymorphicComponent,
  Flex,
  Group,
  GroupProps,
  InputProps,
  Menu,
  MenuItemProps,
  Select,
  SelectProps,
  Tabs,
  TabsProps,
  Text,
  TextInput,
  TextProps,
} from '@mantine/core'
import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

export const VerticalBorder = styled.div`
  height: 40%;
  width: 1.3px;
  background-color: rgb(223, 223, 223);
`
export const SText = styled(Text)<TextProps & { children: string }>`
  font-family: 'Nunito';
  z-index: 9;
  text-align: start;
  font-weight: bolder;
`
export const HoveredMenuItem = styled(Menu.Item)<
  MenuItemProps & { onClick?: () => void }
>`
  &:hover {
    background-color: #d3d3d34b;
  }
`
export const HoveredItem = styled(Flex)<{
  onClick?: () => void
  $isActive?: boolean
  children?: ReactNode
}>`
  padding: 8px 16px 8px 5px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background-color: ${({ $isActive }) =>
    $isActive ? 'var(--mantine-color-primary-light-hover)' : 'transparent'};

  &:hover {
    background-color: var(--mantine-color-primary-light-hover);
  }

  &:active {
    transform: scale(0.98);
  }
`
export const HoveredSelect = styled(Select)<SelectProps>`
  .mantine-Select-options {
    background-color: red !important;
    &:hover {
      background-color: #d3d3d34b !important;
    }
  }
`
export const SInput = styled(TextInput)<InputProps>`
  input:focus {
    border-color: var(--mantine-color-blue-6);
  }
`

export const _SButton = styled(Button)<ButtonProps>`
  &:hover {
    background-color: var(--mantine-color-blue-9) !important;
  }
`

export const _SGButton = styled(Button)<ButtonProps>`
  &:hover {
    background-color: var(--mantine-color-green-7) !important;
  }
`

export const _OpacityButton = styled(Button)<ButtonProps>`
  &:hover {
    opacity: 0.8;
  }
`

export const SButton = createPolymorphicComponent<'button', ButtonProps>(
  _SButton,
)
export const SGButton = createPolymorphicComponent<'button', ButtonProps>(
  _SGButton,
)

export const OpacityButton = createPolymorphicComponent<'button', ButtonProps>(
  _OpacityButton,
)

export const SActionIcon = styled(ActionIcon)<ActionIconProps>`
  &:hover {
    background-color: var(--mantine-color-blue-9);
  }
`
export interface StyledTextProps {
  $font?: 'Roboto' | 'Nunito'
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  color?: string
  $textalign?: 'left' | 'center' | 'right' | 'justify'
  responsive?: boolean
  lineHeight?: string
}

const textStyles = css<StyledTextProps>`
  font-family: ${({ $font }) => $font || 'Roboto'}, sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  color: ${({ color }) => color || '#686968'};
  text-align: ${({ $textalign }) => $textalign || 'left'};
  text-decoration: none;
  transition: all 0.3s ease-in-out;
`

export const ResText = styled(Text)<
  TextProps & { fontSize: number; children: React.ReactNode } & StyledTextProps
>`
  ${textStyles}
  font-size: ${({ fontSize }) => fontSize}px;

  @media (max-width: 1199px) {
    font-size: ${({ fontSize }) =>
      typeof fontSize === 'number' ? fontSize * 0.94 : fontSize}px;
  }

  @media (max-width: 991px) {
    font-size: ${({ fontSize }) =>
      typeof fontSize === 'number' ? fontSize * 0.88 : fontSize}px;
  }

  @media (max-width: 767px) {
    font-size: ${({ fontSize }) =>
      typeof fontSize === 'number' ? fontSize * 0.82 : fontSize}px;
  }

  @media (max-width: 575px) {
    font-size: ${({ fontSize }) =>
      typeof fontSize === 'number' ? fontSize * 0.8 : fontSize}px;
  }
`
export const SimpleText = styled(Text)<
  TextProps & { fontSize: number; children: React.ReactNode } & StyledTextProps
>`
  ${textStyles}
`
export const STabs = styled(Tabs)<TabsProps>`
  .mantine-Tabs-tab:hover {
    background-color: var(--mantine-color-textPrimary-light-hover);
  }
`
export const HoveredText = styled(Text)<
  TextProps & {
    onClick: (e: any) => void
    children: ReactNode
    $isActive: boolean
  }
>`
  &:hover {
    opacity: ${({ $isActive }) => ($isActive ? 0.8 : 1)};
  }
`
