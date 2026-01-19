import { Stack, Text, useMantineTheme } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { OpacityButton, ResText, SButton, SGButton } from '@shared/styles'
import { ProductProfileSection } from './productProfileSection'
import { ReplySection } from './replySection'
import { SimilarAdsSection } from './similarProducts'

const RightSection = () => {
  const { isMobile } = Responsive()
  const theme = useMantineTheme()
  return (
    <Stack
      w={isMobile ? '100%' : '38%'}
      pos="sticky"
      top={30}
      right={0}
      h={isMobile ? 'auto' : '100vh'}
      mb={isMobile ? 100 : 0}
    >
      <ResText fontSize={26}>200,000 AF</ResText>
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
            <Text size="lg">Show phone</Text>
            <Text size="sm">+93750 XXX XXX</Text>
          </Stack>
        </SButton>
        <SGButton
          size="xl"
          bg="green"
          radius={3}
        >
          <Text size="lg">Write a message</Text>
        </SGButton>
      </Stack>

      {/* product profile section */}
      <ProductProfileSection />

      {/* seller button section */}
      <OpacityButton
        bg={theme.colors.backgroundInput[8]}
        radius={3}
        c="textSecondary"
      >
        Subscribe to the seller
      </OpacityButton>

      {/* reply section */}
      <ReplySection />

      {/* similar ads section */}
      {isMobile && <SimilarAdsSection />}
    </Stack>
  )
}

export { RightSection }
