import { Group, ScrollArea, Text } from '@mantine/core'
import { Logo } from '@shared/ui/logo'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate } from 'react-router-dom'
import { MdOutlineManageSearch } from 'react-icons/md'
import { HModal } from '@shared/styles'
import { FilterForm } from '@entities/filter-form'
import { BaseModal } from '@shared/ui/modal'

const FilterModal = () => {
  const navigate = useNavigate()
  const { pathname } = useProfileDropDown({})
  const handleClose = () => {
    navigate(-1 || '')
  }

  return (

      <BaseModal
      opened={pathname.endsWith('filters')}
      onClose={handleClose}
      fullScreen
      pos="relative"
      >
      {/* Content */}
      <ScrollArea
        h="100dvh"
        scrollbars="y"
        scrollbarSize={4}
      >
        <Group
          justify="flex-start"
          align="center"
          my="md"
          c="darkText"
          px={10}
          gap={5}
          py={5}
        >
          <MdOutlineManageSearch size={19} />
          <Text
            size="12px"
            pt={3}
          >
            Filter
          </Text>
        </Group>
        <FilterForm />
      </ScrollArea>
      </BaseModal>
  )
}

export { FilterModal }
