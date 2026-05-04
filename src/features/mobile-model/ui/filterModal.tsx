import { Group, ScrollArea, Text } from '@mantine/core'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate } from 'react-router-dom'
import { MdOutlineManageSearch } from 'react-icons/md'
import { FilterForm } from '@entities/filter-form'
import { BaseModal } from '@shared/ui/modal'
import { useTranslation } from 'react-i18next'

const FilterModal = () => {
  const navigate = useNavigate()
  const { pathname } = useProfileDropDown({})
  const handleClose = () => {
    navigate(-1 || '')
  }
  const { t } = useTranslation()

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
            {t('filter.filter')}
          </Text>
        </Group>
        <FilterForm />
      </ScrollArea>
    </BaseModal>
  )
}

export { FilterModal }
