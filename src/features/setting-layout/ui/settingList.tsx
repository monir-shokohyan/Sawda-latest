import { SidebarItem } from '../styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { MenuItems } from '../constant'
import { ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { Stack } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'

const SettingList = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { isMobile } = Responsive()
  const FontSize = isMobile
    ? TypographySize.SemiLarge
    : TypographySize.SemiSmall

  return (
    <>
      <Stack
        w={isMobile ? '100%' : 250}
        p={isMobile ? 0 : 20}
        gap={5}
      >
        {MenuItems.map((item) => (
          <SidebarItem
            key={item.path}
            $isActive={pathname.startsWith(item.path)}
            onClick={() => navigate(item.path + 'monir')}
          >
            <ResText fontSize={FontSize}>{item.label}</ResText>
          </SidebarItem>
        ))}
      </Stack>
    </>
  )
}

export { SettingList }
