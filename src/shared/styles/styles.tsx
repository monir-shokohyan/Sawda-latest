import {
  ActionIcon,
  ActionIconProps,
  Button,
  ButtonProps,
  createPolymorphicComponent,
  InputProps,
  Menu,
  MenuItemProps,
  Select,
  SelectProps,
  Text,
  TextInput,
  TextProps,
} from '@mantine/core'
import styled from 'styled-components'

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
export const SButton = createPolymorphicComponent<'button', ButtonProps>(
  _SButton,
)

export const SActionIcon = styled(ActionIcon)<ActionIconProps>`
  &:hover {
    background-color: var(--mantine-color-blue-9);
  }
`
