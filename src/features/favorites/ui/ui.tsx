import { SearchFilter } from '@features/search-filter/ui'
import { Group, Stack } from '@mantine/core'
import { GradientContainer } from '@shared/ui/containers'
import { ProductScroll } from '@features/product-scroll/ui'
import { Responsive } from '@shared/hooks/responsive'
import { ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'

function Ui() {
  const { isMobile } = Responsive()
  return (
    <Stack
      w="100%"
      gap={0}
      px={isMobile ? '10px' : '0px'}
    >
      <GradientContainer>
        <Group
          w="100%"
          justify="space-between"
          py="xl"
          wrap="wrap"
        >
          <ResText
            c="darkText"
            fontSize={TypographySize.UltraLarge}
          >
            Favorites
          </ResText>
          <SearchFilter
            isMobile={isMobile}
            route="favorites"
          />
        </Group>
      </GradientContainer>

      <ProductScroll allowPadding={false} />
    </Stack>
  )
}

export { Ui }
