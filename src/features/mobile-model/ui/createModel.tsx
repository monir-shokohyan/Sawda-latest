import { AddEditProduct } from '@features/add-edit-product'
import { Flex } from '@mantine/core'
import { Paths } from '@shared/api/paths/paths'
import { Logo } from '@shared/ui/logo'
import { BaseModal } from '@shared/ui/modal'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate } from 'react-router-dom'

const CreateModel = () => {
  const navigate = useNavigate()
  const { pathname } = useProfileDropDown({})

  return (

      <BaseModal
      opened={pathname.endsWith('add')}
      onClose={() => navigate(Paths.Main)}
      fullScreen
      title={<Logo />}
      pos="relative"
      >
      
      <Flex
        direction="column"
        h="100%"
      >
        <AddEditProduct />
      </Flex>
      </BaseModal>
  )
}

export { CreateModel }
