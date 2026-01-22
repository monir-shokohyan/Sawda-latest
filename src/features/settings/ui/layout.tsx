import { ReactNode } from 'react'
import { Container, SidebarItem } from '../styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { MenuItems } from '../constant'
import { ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { Stack } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { isMobile } = Responsive()

  return (
    <Container>
      {!isMobile && (
        <Stack
          w={250}
          p={20}
          gap={5}
        >
          {MenuItems.map((item) => (
            <SidebarItem
              key={item.path}
              $isActive={pathname.startsWith(item.path)}
              onClick={() => navigate(item.path + 'monir')}
            >
              <ResText fontSize={TypographySize.SemiSmall}>
                {item.label}
              </ResText>
            </SidebarItem>
          ))}
        </Stack>
      )}
      {children}
    </Container>
  )
}

export { Layout }
