import {
  Container,
  Stack,
  Tabs,
} from '@mantine/core'
import BreadcrumbsNav from '@shared/bread-crumb/breadcrumb'
import { GeneralPadding } from '@shared/constants'
import { useSearchParams } from 'react-router-dom'
import { Responsive } from '@shared/hooks/responsive'
import { GradientContainer } from '@shared/ui/containers'
import { ProfileHeader } from './profileHeader'
import { useState } from 'react'
import { Listing } from './Listing'
import { Reviews } from './Reviews'

function Ui() {
  const { isMobile } = Responsive()
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? 'Untitled'
  const [tab, setTab] = useState('Listing')

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
        <ProfileHeader />

        <Container
          fluid
          w="100%"
          px="2.5%"
        >
          <Tabs
            value={tab}
            onChange={(value) => setTab(value as string)}
            mt={100}
          >
            <Tabs.List>
              <Tabs.Tab value="Listing">Listing</Tabs.Tab>
              <Tabs.Tab value="Reviews">Reviews</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="Listing">
              <Listing />
            </Tabs.Panel>

            <Tabs.Panel value="Reviews">
              <Reviews />
            </Tabs.Panel>

          </Tabs>
        </Container>
      </Stack>
    </GradientContainer>
  )
}

export { Ui }
