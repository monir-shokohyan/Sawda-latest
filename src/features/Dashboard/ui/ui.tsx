import { SearchFilter } from '@features/search-filter/ui'
import { Flex, Group, Stack } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Filter } from '../../search-filter/ui/filter'
import { CardCarousal } from '@features/card-scroll/ui'
import { GradientContainer } from '@shared/ui/containers'
import Ads from '@shared/ads/ads'
import { ProductScroll } from '@features/product-scroll/ui'

function Ui() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Stack
      w="100%"
      gap={0}
    >
      <GradientContainer gDirection="top-to-bottom">
        <Group
          gap={isMobile ? 10 : 20}
          w="100%"
          justify="center"
          p={{ base: 'sm', sm: 'sm', md: 'lg', lg: '50px' }}
        >
          {!isMobile && <Filter />}
          <SearchFilter isMobile={isMobile} />
        </Group>

        <Flex
          w="100%"
          justify="center"
          direction="column"
          p={{ base: 'sm', sm: 'sm', md: 'lg', lg: '50px' }}
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

        <Flex
          w="100%"
          justify="center"
          direction="column"
          p={{ base: 'sm', sm: 'sm', md: 'lg', lg: '50px' }}
        >
          <Ads />
        </Flex>
      </GradientContainer>

      <ProductScroll />
    </Stack>
  )
}

export { Ui }
