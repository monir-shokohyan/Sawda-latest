import { SearchFilter } from '@features/search-filter/ui'
import { Flex, Group, Stack } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Filter } from '../../search-filter/ui/filter'
import { CardCarousal } from '@features/card-scroll/ui'
import { GradientContainer } from '@shared/ui/containers'

function Ui() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <Stack
      w="100%"
      gap={0}
    >

      <GradientContainer gDirection="top-to-bottom"  >
      <Group
        gap={isMobile ? 10 : 20}
        w="100%"
        justify="center"
        p={{ base: 'lg', sm: 'lg', md: 'lg', lg: '50px' }}
        >
        {!isMobile && <Filter />}
        <SearchFilter isMobile={isMobile} />
      </Group>
      </GradientContainer>

      <GradientContainer gDirection="bottom-to-top">
      <Flex
        w="100%"
        justify="center"
        direction="column"
        p={{ base: 'lg', sm: 'lg', md: 'lg', lg: '50px' }}
      >
        <CardCarousal
          isMobile={isMobile}
          minNum={1}
          maxNum={7}
        />
        <CardCarousal
          isMobile={isMobile}
          minNum={8}
          maxNum={14}
        />
      </Flex>
      </GradientContainer>
      
    </Stack>
  )
}

export { Ui }
