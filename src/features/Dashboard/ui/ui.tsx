import { SearchFilter } from '@features/search-filter/ui'
import { Flex, Group, Stack } from '@mantine/core'
import { CardCarousal } from '@features/card-scroll/ui'
import { GradientContainer } from '@shared/ui/containers'
import Ads from '@shared/ads/ads'
import { ProductScroll } from '@features/product-scroll/ui'
import { GeneralPadding, GeneralPaddingY } from '@shared/constants'
import { Responsive } from '@shared/hooks/responsive'
import { MenuFilter } from '@features/search-filter/ui/MenuFilter'

function Ui() {
  const { isMobile } = Responsive()
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
          px={GeneralPadding}
          py={GeneralPaddingY}
          pos="sticky"
          top={0}
          style={{ zIndex: 10 }}
        >
          {!isMobile && <MenuFilter />}
          <SearchFilter isMobile={isMobile} />
        </Group>

        <Flex
          w="100%"
          justify="center"
          direction="column"
          px={GeneralPadding}
          py={GeneralPaddingY}
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
