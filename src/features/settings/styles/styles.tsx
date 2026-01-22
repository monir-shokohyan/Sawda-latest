import { Center, CenterProps } from '@mantine/core'
import styled from 'styled-components'

export const SCenter = styled(Center)<CenterProps>`
  border-radius: 5px;
  transform: translate(-50%, 0%);
  overflow: hidden;
  box-shadow:
    rgba(0, 0, 0, 0.2) 2px 2px 8px,
    rgba(255, 255, 255, 0.2) -2px -2px 8px,
    rgba(255, 255, 255, 0.3) 2px 2px 4px inset,
    rgba(0, 0, 0, 0.3) -2px -2px 4px inset;
`
export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`


export const SidebarItem = styled.div<{ $isActive?: boolean }>`
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: ${({ $isActive }) => ($isActive ? '500' : '400')};
  background-color: ${({ $isActive }) =>
    $isActive ? 'var(--mantine-color-primary-light-hover)' : 'transparent'};

  &:hover {
    background-color: var(--mantine-color-primary-light-hover);
  }

  &:active {
    transform: scale(0.98);
  }
`
