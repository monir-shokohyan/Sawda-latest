import { Card, CardProps } from '@mantine/core'
import styled from 'styled-components'

export const CategoryCard = styled(Card)<CardProps>`
  border-radius: 16px;
  padding: 10px;
  width: 160px;
  height: 90px;
  flex-shrink: 0;
  text-align: center;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;

  &:hover {
    transform: translateY(-4px);
  }
`
