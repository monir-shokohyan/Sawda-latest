import {
  ActionIcon,
  ActionIconProps,
  Button,
  ButtonProps,
  Card,
  CardProps,
  createPolymorphicComponent,
  Flex,
  InputProps,
  Menu,
  MenuItemProps,
  Modal,
  ModalProps,
  PasswordInput,
  Select,
  SelectProps,
  Tabs,
  TabsProps,
  Text,
  TextInput,
  TextProps,
} from '@mantine/core'
import { TypographySize } from '@shared/typography'
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
  border-radius: 0px;
  &:hover {
    background-color: var(--mantine-color-primary-light-hover);
  }
`
export const HoveredItem = styled(Flex)<{
  onClick?: () => void
  $isActive?: boolean
  children?: ReactNode
}>`
  padding: 8px 10px;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid #80808021;
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
export const SInputPassword = styled(PasswordInput)<InputProps>`
  input:focus {
    border-color: var(--mantine-color-blue-6);
  }
`

export const _SButton = styled(Button)<ButtonProps & { $isSubtle: boolean }>`
  input {
    display: none;
  }
  &:hover {
    background-color: ${({ $isSubtle }) =>
      $isSubtle
        ? 'var(--mantine-color-primary-light-hover)'
        : 'var(--mantine-color-blue-9)'} !important;
    color: ${({ $isSubtle }) => ($isSubtle ? 'default' : 'white')} !important;
  }
`
export const SButton = createPolymorphicComponent<
  'button',
  ButtonProps & { $isSubtle?: boolean }
>(_SButton)

export const _SGButton = styled(Button)<ButtonProps>`
  &:hover {
    background-color: var(--mantine-color-green-7) !important;
  }
`
export const SGButton = createPolymorphicComponent<'button', ButtonProps>(
  _SGButton,
)

export const SActionIcon = styled(ActionIcon)<
  ActionIconProps & {
    onClick?: (e: any) => void
    ref?: any
    $isSubtle?: boolean
    children: ReactNode
    title?: string
    type?: 'submit'
  }
>`
  &:hover {
    background-color: ${({ $isSubtle }) =>
      $isSubtle
        ? 'var(--mantine-color-primary-light-hover)'
        : 'var(--mantine-color-blue-9)'} !important;
    color: ${({ $isSubtle }) => ($isSubtle ? 'default' : 'white')} !important;
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
  TextProps & {
    fontSize: TypographySize
    children: React.ReactNode
  } & StyledTextProps
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
    background-color: var(--mantine-color-primary-light-hover);
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

export interface InteractiveCardProps extends CardProps {
  variant?: 'default' | 'active'
}

export const InteractiveCard = styled(Card)<InteractiveCardProps>`
  transition: all 0.16s ease;

  &[data-variant='active'],
  &[data-variant='active']:hover {
    border-color: var(--mantine-color-primary-8);
  }

  &:not([data-variant='active']):hover {
    border-color: var(--mantine-color-primary-8);
  }
`

////audio players

export const AudioBubble = styled.div<{ $isOwn: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 16px;
  min-width: 240px;
  max-width: 300px;
  /* background-color: red; */
`

export const PlayButton = styled.button<{ $isOwn: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${({ $isOwn }) =>
    $isOwn ? 'white' : 'var(--mantine-color-primary-6)'};
  color: ${({ $isOwn }) =>
    $isOwn ? 'var(--mantine-color-primary-6)' : 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.98);
  }
`

export const AudioContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`

export const ProgressBarContainer = styled.div<{ $isOwn: boolean }>`
  width: 100%;
  height: 4px;
  background: ${({ $isOwn }) =>
    $isOwn ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`

export const ProgressBar = styled.div<{ $isOwn: boolean }>`
  height: 100%;
  background: ${({ $isOwn }) =>
    $isOwn ? 'white' : 'var(--mantine-color-primary-6)'};
  border-radius: 2px;
  transition: width 0.1s linear;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: ${({ $isOwn }) =>
      $isOwn ? 'white' : 'var(--mantine-color-primary-6)'};
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: opacity 0.2s;
  }

  ${ProgressBarContainer}:hover &::after {
    opacity: 1;
  }
`

export const TimeDisplay = styled.div<{ $isOwn: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: ${({ $isOwn }) =>
    $isOwn ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.5)'};
  font-weight: 500;
`
export const HModal = styled(Modal)<ModalProps>`
  .mantine-Modal-close:hover {
    background-color: var(--mantine-color-primary-light-hover);
  }
`
