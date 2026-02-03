import { Stack, Text } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { ResText, SButton, SGButton } from '@shared/styles'
import { ProductProfileSection } from './productProfileSection'
import { SimilarAdsSection } from './similarProducts'
import { TypographySize } from '@shared/typography'
import { ReplyProductForm } from '@entities/reply-form'

const RightSection = () => {
  const { isMobile } = Responsive()
  return (
    <Stack
      w={isMobile ? '100%' : '25%'}
      pos="sticky"
      top={30}
      right={0}
      h={isMobile ? 'auto' : '100vh'}
      mb={isMobile ? 100 : 0}
    >
      {!isMobile && (
        <ResText
          c="darkText"
          fontSize={TypographySize.Large}
        >
          200,000 AF
        </ResText>
      )}

      <Stack>
        <SButton
          size="xl"
          radius={3}
        >
          <Stack
            gap={0}
            justify="center"
            align="center"
            color="white"
          >
            <Text size="md">Show phone</Text>
            <Text size="sm">+93750 XXX XXX</Text>
          </Stack>
        </SButton>

        <SGButton
          size="xl"
          bg="green"
          radius={3}
        >
          <Text size="md">Write a message</Text>
        </SGButton>
      </Stack>
      <ProductProfileSection />

      <SButton
        radius={3}
        variant="outline"
      >
        Subscribe to the seller
      </SButton>

      <ReplyProductForm />

      {isMobile && <SimilarAdsSection />}
    </Stack>
  )
}

export { RightSection }
