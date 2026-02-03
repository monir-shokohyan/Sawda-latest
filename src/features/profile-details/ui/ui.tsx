import { Container, Tabs } from '@mantine/core'
import { useSearchParams } from 'react-router-dom'
import { ProfileHeader } from './profileHeader'
import { useState } from 'react'
import { Listing } from './Listing'
import { Reviews } from './Reviews'
import { STabs } from '@shared/styles'
import { ContainerWithBreadCrumb } from '@shared/ui/container-with-bread-crumb'

function Ui() {
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? 'Untitled'
  const [tab, setTab] = useState('Listing')

  return (
    <ContainerWithBreadCrumb title={name}>
      <ProfileHeader />
      <Container
        fluid
        w="100%"
        px="2.5%"
      >
        <STabs
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
        </STabs>
      </Container>
    </ContainerWithBreadCrumb>
  )
}

export { Ui }
