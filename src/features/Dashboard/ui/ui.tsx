import { SearchFilter } from '@features/search-filter/ui'
import { Flex, Group, Stack } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Filter } from '../../search-filter/ui/filter'
import { CardCarousal } from '@features/card-scroll/ui'

function Ui() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
   <Stack
      w="100%"
      p={{ base: 'lg', sm: 'lg', md: 'lg', lg: '50px' }}
      gap={30}
    >

      <Group
        gap={isMobile ? 10 : 20}
        w="100%"
        justify="center"
      >
        {!isMobile && <Filter />}
        <SearchFilter isMobile={isMobile} />
      </Group>

      <Flex
        w="100%"
        justify="center"
        direction="column"
      >
        <CardCarousal isMobile={isMobile} minNum={1} maxNum={7}/>
        <CardCarousal isMobile={isMobile} minNum={8} maxNum={14}/>
      </Flex>

    </Stack>
  )
}

export { Ui }
