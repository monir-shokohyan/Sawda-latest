import { Card, CardProps, rem } from '@mantine/core'
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

export const LoaderSpinner = styled.div`
  width: ${rem(40)};
  height: ${rem(40)};
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4a90e2;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
