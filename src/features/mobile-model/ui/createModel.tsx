import { AddEditProduct } from '@features/add-edit-product'
import { ProfileSection } from '@features/product-card/ui/profileSection'
import { Button, Flex, Modal } from '@mantine/core'
import { Paths } from '@shared/api/paths/paths'
import { HModal, HoveredItem, ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { DarkMode } from '@shared/ui/darkMode'
import { LanguageDropDown } from '@shared/ui/language'
import { Logo } from '@shared/ui/logo'
import { OverlayBg } from '@shared/ui/overlayBg'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate } from 'react-router-dom'

const CreateModel = () => {
  const navigate = useNavigate()
  const { pathname } = useProfileDropDown({})

  return (
    <HModal
      opened={pathname.endsWith('add')}
      onClose={() => navigate(Paths.Main)}
      fullScreen
      title={<Logo />}
      pos="relative"
      transitionProps={{ transition: 'fade', duration: 200 }}
    >
      <Flex
        direction="column"
        h="100%"
      >
      <AddEditProduct />
      </Flex>
  
    </HModal>
  )
}

export { CreateModel }
