import { Divider, Stack } from '@mantine/core'
import { ImageCarousel } from '@shared/ui/carousal'
import { SimilarAdsSection } from './similarProducts'
import { Responsive } from '@shared/hooks/responsive'
import { DetailsList, DetailsObject } from '../constant'
import { ProductDetails } from './productDetails'
import { PriceDisplay } from '@shared/ui/price-display'
import { PrimaryHeading } from '@shared/typography/primary-heading'
import { useTranslation } from 'react-i18next'

const LeftSection = () => {
  const { isMobile } = Responsive()
  const { t } = useTranslation()
  const modifiedDetailsObject = DetailsObject.map((item) => ({
    ...item,
    title: t(item.title as any),
  }))
  return (
    <Stack
      w={isMobile ? '100%' : '72%'}
      mt={isMobile ? 40 : 0}
    >
      <PrimaryHeading>
        2019 Toyota Land Cruiser Prado 2.8 AT 112,000 km
      </PrimaryHeading>
      {isMobile && (
        <PriceDisplay
          amount={30000}
          currency="USD"
        />
      )}
      <ImageCarousel />
      <Divider />
      <ProductDetails
        DetailsList={DetailsList}
        DetailsObject={modifiedDetailsObject}
      />
      <Divider />
      {!isMobile && <SimilarAdsSection />}
    </Stack>
  )
}

export { LeftSection }
