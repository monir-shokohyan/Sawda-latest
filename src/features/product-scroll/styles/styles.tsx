import { Card, CardProps } from '@mantine/core'
import styled from 'styled-components'

export const CategoryCard = styled(Card)<{ $isMobile: boolean } & CardProps>`
  border-radius: ${({ $isMobile }) => ($isMobile ? '8px' : '16px')};
  padding: 10px;
  width: ${({ $isMobile }) => ($isMobile ? '100px' : '160px')};
  height: ${({ $isMobile }) => ($isMobile ? '70px' : '90px')};
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
