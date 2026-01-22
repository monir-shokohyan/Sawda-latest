import { ReactNode } from 'react'
import { Container, Sidebar, SidebarItem } from '../styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { MenuItems } from '../constant'

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  


  return (
    <Container>
      <Sidebar>
        {MenuItems.map((item) => (
          <SidebarItem
            key={item.path}
            $isActive={pathname.startsWith(item.path)}
            onClick={() => navigate(item.path + 'monir')}
          >
            {item.label}
          </SidebarItem>
        ))}
      </Sidebar>
      {children}
    </Container>
  )
}

export { Layout }