import { Flex, FlexProps, Paper, PaperProps } from '@mantine/core'
import styled from 'styled-components'
import { Message } from '../types'

export const StickyPaper = styled(Paper)<
  PaperProps & { children: React.ReactNode; type?: 'header' | 'footer' }
>`
  position: sticky;
  z-index: 10;
  background: var(--mantine-color-background-7);
  border-bottom: ${({ type }) =>
    type === 'header' ? '1px solid var(--mantine-color-gray-7)' : 'none'};
  border-top: ${({ type }) =>
    type === 'footer' ? '1px solid var(--mantine-color-gray-7)' : 'none'};
  top: ${({ type }) => (type === 'header' ? '0' : 'auto')};
  bottom: ${({ type }) => (type === 'footer' ? '0' : 'auto')};
  padding: 16px;
`

export const ChatContainer = styled(Flex)<FlexProps>`
  overflow-y: auto;
`
export const Container = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ $isMobile }) => ($isMobile ? '16px' : '24px')};
`
