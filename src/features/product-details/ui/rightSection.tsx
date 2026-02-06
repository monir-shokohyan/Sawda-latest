import { Divider, Stack, Text } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { ResText, SGButton } from '@shared/styles'
import { SimilarAdsSection } from './similarProducts'
import { TypographySize } from '@shared/typography'
import { ReplyProductForm } from '@entities/reply-form'
import { ShowHideButton } from '@shared/ui/buttons/show-hide'
import { ProfileSection } from '@features/product-card/ui/profileSection'
import { RateSellerForm } from '@entities/rate-seller'
import { BiMessageDetail } from 'react-icons/bi'
import { PriceDisplay } from '@shared/ui/price-display'

const RightSection = () => {
  const { isMobile } = Responsive()
  return (
    <Stack
      w={isMobile ? '100%' : '25%'}
      pos="sticky"
      top={30}
      right={0}
      h={isMobile ? 'auto' : '100vh'}
      my={isMobile ? 50 : 0}
    >
      {!isMobile && (
        <PriceDisplay
        amount={30000}
        currency="USD"
        />        
      )}

      <Stack>
        <ShowHideButton phone="+93750179642" />

        <SGButton
          size="lg"
          bg="green"
          radius={3}
          leftSection={<BiMessageDetail size={18} />}
        >
          <Text size="md">Write a message</Text>
        </SGButton>
      </Stack>
      <Divider />

      <ProfileSection
        profile={{
          username: 'Monir1995',
          email: 'monir.shekoyans1@gmail.com',
        }}
        showEmail
        fullSize={false}
        allowPadding={false}
      />
      <Divider />
      <RateSellerForm />
      <Divider />
      <ReplyProductForm />
      <Divider />
      {isMobile && <SimilarAdsSection />}
    </Stack>
  )
}

export { RightSection }
