import {
  Card,
  CardProps,
  Flex,
  FlexProps,
  Group,
  Paper,
  PaperProps,
} from '@mantine/core'
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
export const StyledCard = styled(Card)<
  CardProps & {
    $isActive?: boolean
    $isRead?: boolean
    onClick: (e: React.MouseEvent) => void
  }
>`
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $isActive }) =>
    $isActive ? 'var(--mantine-color-primary-light-hover)' : 'transparent'};
  border-left: ${({ $isActive }) =>
    $isActive
      ? '3px solid var(--mantine-color-primary-light-hover)'
      : '3px solid transparent'};
  opacity: ${({ $isRead }) => ($isRead ? 0.7 : 1)};

  &:hover {
    background: var(--mantine-color-primary-light-hover);
    transform: translateX(2px);
  }
`
export const BubbleWrapper = styled(Group)<{ $isOwn: boolean }>`
  justify-content: ${({ $isOwn }) => ($isOwn ? 'flex-end' : 'flex-start')};
  width: 100%;
  padding: 2px 0;
`

export const MessageBubble = styled.div<{
  $isOwn: boolean
  $isText: boolean
}>`
  min-width: 120px;
  max-width: ${({ $isText }) => ($isText ? 'auto' : '100%')};
  padding: ${({ $isText }) => ($isText ? '14px 10px' : '5px')};
  background: ${({ $isOwn }) =>
    $isOwn
      ? 'var(--mantine-color-primary-8)'
      : 'var(--mantine-color-background-9)'};
  color: ${({ $isOwn }) => ($isOwn ? 'white' : 'var(--mantine-color-darkText-8)')};
  border-radius: ${({ $isText }) => ($isText ? '18px' : '5px')};
  word-wrap: break-word;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  position: relative;
`
