import { SearchFilter } from '@features/search-filter/ui'
import { Flex, Group, Stack } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Filter } from '../../search-filter/ui/filter'
import { CardCarousal } from '@features/card-scroll/ui'
import { GradientContainer } from '@shared/ui/containers'
import Ads from '@shared/ads/ads'
import { ProductScroll } from '@features/product-scroll/ui'
import { GeneralPadding } from '@shared/constants'

function Ui() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Stack
      w="100%"
      gap={0}
    >
      <GradientContainer>
        <Group
          gap={isMobile ? 10 : 20}
          w="100%"
          justify="center"
          p={GeneralPadding}
          pos="sticky"
          top={0}
          style={{ zIndex: 10 }}
        >
          {!isMobile && <Filter />}
          <SearchFilter isMobile={isMobile} />
        </Group>

        <Flex
          w="100%"
          justify="center"
          direction="column"
          p={GeneralPadding}
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
          p={GeneralPadding}
        >
          <Ads />
        </Flex>
      </GradientContainer>

      <ProductScroll />
    </Stack>
  )
}

export { Ui }
