import { SidebarItem } from '../styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { MenuItems } from '../constant'
import { ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { Stack } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { useTranslation } from 'react-i18next'

const SettingList = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { isMobile } = Responsive()
  const FontSize = isMobile
    ? TypographySize.SemiLarge
    : TypographySize.SemiSmall
  const { t } = useTranslation()

  const modifiedMenuItems = MenuItems.map(item=>({
    ...item,
    label: t(item.label)
  }))
  return (
    <>
      <Stack
        w={isMobile ? '100%' : 250}
        p={isMobile ? 0 : 20}
        gap={5}
      >
        {modifiedMenuItems.map((item) => (
          <SidebarItem
            key={item.path}
            $isActive={pathname.startsWith(item.path)}
            onClick={() => navigate(item.path + 'monir')}
          >
            <ResText
              c="darkText"
              fontSize={FontSize}
            >
              {item.label}
            </ResText>
          </SidebarItem>
        ))}
      </Stack>
    </>
  )
}

export { SettingList }
