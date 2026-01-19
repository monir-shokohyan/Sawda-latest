import { Flex, Stack } from '@mantine/core'
import BreadcrumbsNav from '@shared/bread-crumb/breadcrumb'
import { GeneralPadding } from '@shared/constants'
import { useSearchParams } from 'react-router-dom'
import { Responsive } from '@shared/hooks/responsive'
import { GradientContainer } from '@shared/ui/containers'
import { RightSection } from './rightSection'
import { LeftSection } from './leftSection'

function Ui() {
  const { isMobile } = Responsive()
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? 'Untitled'

  return (
    <GradientContainer>
      <Stack
        w="100%"
        gap={0}
        p={isMobile ? 'sm' : GeneralPadding}
      >
        <BreadcrumbsNav
          items={[{ title: 'Home', href: '/' }, { title: name }]}
        />
        <Flex
          gap="2%"
          p={isMobile ? '0px' : GeneralPadding}
          py={isMobile ? '20px' : GeneralPadding}
          wrap="wrap"
        >
          {/* left section */}
          <LeftSection />

          {/* right section */}
          <RightSection />
        </Flex>
      </Stack>
    </GradientContainer>
  )
}

export { Ui }
