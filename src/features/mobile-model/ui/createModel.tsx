import { AddEditProduct } from '@features/add-edit-product'
import { Flex } from '@mantine/core'
import { Paths } from '@shared/api/paths/paths'
import { HModal } from '@shared/styles'

import { Logo } from '@shared/ui/logo'
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
