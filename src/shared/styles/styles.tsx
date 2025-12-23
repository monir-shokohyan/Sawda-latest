import { Text, TextProps } from '@mantine/core'
import styled from 'styled-components'

export const VerticalBorder = styled.div`
  height: 40%;
  width: 1.3px;
  background-color: rgb(223, 223, 223);
`
export const SText = styled(Text)< TextProps & {children: string}>`
  font-family: 'Nunito';
  z-index: 9;
  text-align: start;
  font-weight: bolder;
`