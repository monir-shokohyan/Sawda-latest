import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Stack, Grid } from '@mantine/core'
import { Content, IconWrapper, TitleWrapper } from '../styles'
import { ProductCard } from '@features/product-card'
import { PrimaryHeading } from '@shared/typography/primary-heading'
import { useTranslation } from 'react-i18next'
import { ProductsMaps } from '../constant'

export function SimilarAdsSection() {
  const [isOpen, setIsOpen] = useState(true)
  const { t } = useTranslation()

  const toggleOpen = () => setIsOpen((prev) => !prev)

  return (
    <Stack
      mt={20}
      pb={10}
    >
      <TitleWrapper onClick={toggleOpen}>
        <PrimaryHeading>{t('product.similarAds')}</PrimaryHeading>
        <IconWrapper
          $isOpen={isOpen}
          variant="transparent"
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </IconWrapper>
      </TitleWrapper>

      <Content $isOpen={isOpen}>
        <Grid gutter={{ base: 12, sm: 16, md: 20 }}>
          {ProductsMaps.map((product) => (
            <Grid.Col
              key={product.id}
              span={{ base: 6, sm: 6, md: 4, lg: 4 }}
            >
              <ProductCard
                profile={product}
                handleToggleLike={() => console.log('')}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Content>
    </Stack>
  )
}
