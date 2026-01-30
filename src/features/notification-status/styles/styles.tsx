import { Card, CardProps, Tabs, TabsProps } from '@mantine/core'
import styled from 'styled-components'

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
  border-bottom: 1px solid var(--mantine-color-primary-light-hover);
`
export const HovTabs = styled(Tabs)<TabsProps>`
  .mantine-Tabs-tab:hover {
    background-color: var(--mantine-color-primary-light-hover);
  }

  .mantine-Tabs-tab {
    transition: all 0.2s ease-in-out;
  }

  .mantine-Tabs-list {
    position: relative;
  }
`
