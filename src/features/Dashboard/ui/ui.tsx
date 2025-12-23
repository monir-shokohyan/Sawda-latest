import { SearchFilter } from '@features/search-filter/ui'
import { ActionIcon, Button, Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { MdOutlineManageSearch } from 'react-icons/md'

function Ui() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Flex w="100%">
      <Flex
        py="xl"
        px="md"
        gap={isMobile ? 10 : 20}
        w="100%"
        justify="center"
      >
        {!isMobile && (
          <ActionIcon
            size="xl"
          >
            <MdOutlineManageSearch 
            size={isMobile ? 13 : 20} />
          </ActionIcon>
        )}
        <SearchFilter />
      </Flex>
    </Flex>
  )
}

export { Ui }
