import { Flex, FlexProps } from '@mantine/core'
import styled from 'styled-components'

export const InputContainer = styled(Flex)<FlexProps>`
  height: 42px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
  outline: 1px solid var(--mantine-color-primary-6);
  outline-offset: -1px;
`
