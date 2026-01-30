import { Group, Modal, ScrollArea, Text } from '@mantine/core'
import { Logo } from '@shared/ui/logo'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate } from 'react-router-dom'
import { Filter } from '@features/search-filter/ui/filter'
import { MdOutlineManageSearch } from 'react-icons/md'

const FilterModal = () => {
  const navigate = useNavigate()
  const { pathname } = useProfileDropDown({})
  const handleClose = () => {
    navigate(-1 || '')
  }

  return (
    <Modal
      opened={pathname.endsWith('filters')}
      onClose={handleClose}
      fullScreen
      title={<Logo />}
      pos="relative"
      transitionProps={{ transition: 'fade', duration: 200 }}
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
        <Filter />
      </ScrollArea>
    </Modal>
  )
}

export { FilterModal }
