import { Flex, Stack, Text } from '@mantine/core'
import { ResText, SButton } from '@shared/styles'
import { ImageCarousel } from '@shared/ui/carousal'
import { MdEditDocument, MdOutlineFavorite } from 'react-icons/md'
import { SimilarAdsSection } from './similarProducts'
import { Responsive } from '@shared/hooks/responsive'
import { DetailsList, DetailsObject } from '../constant'
import { ProductDetails } from './productDetails'
import { TypographySize } from '@shared/typography'

const LeftSection = () => {
  const { isMobile } = Responsive()
  return (
    <Stack w={isMobile ? '100%' : '72%'}>
      <ResText
        fontSize={TypographySize.Large}
        c="darkText"
      >
        2019 Toyota Land Cruiser Prado 2.8 AT 112,000 km
      </ResText>
      {isMobile && (
        <ResText
          c="darkText"
          fontSize={TypographySize.Large}
        >
          $ 200,000
        </ResText>
      )}

      <ImageCarousel />
      <ProductDetails
        DetailsList={DetailsList}
        DetailsObject={DetailsObject}
      />

      {!isMobile && <SimilarAdsSection />}
    </Stack>
  )
}

export { LeftSection }
