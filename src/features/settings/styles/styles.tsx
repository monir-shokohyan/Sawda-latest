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

export const Sidebar = styled.div`
  width: 250px;
  padding: 20px;
`

export const SidebarTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`

export const SidebarItem = styled.div`
  padding: 10px 0;
  cursor: pointer;
  font-size: 14px;
`
