import { ReactNode } from 'react'
import { Container, Sidebar, SidebarItem } from '../styles'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Sidebar>
        <SidebarItem>Edit profile</SidebarItem>
        <SidebarItem>Change password</SidebarItem>
        <SidebarItem>Notification</SidebarItem>
        <SidebarItem>Data and privacy</SidebarItem>
        <SidebarItem>Theme</SidebarItem>
      </Sidebar>
      {children}
    </Container>
  )
}

export { Layout }
