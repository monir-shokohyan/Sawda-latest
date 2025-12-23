import { SearchFilter } from '@features/search-filter/ui'
import { Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Filter } from '../../search-filter/ui/filter'

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
        {!isMobile && <Filter />}
        <SearchFilter />
      </Flex>
    </Flex>
  )
}

export { Ui }
