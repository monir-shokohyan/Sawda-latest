import {
  Container,
  Flex,
  Group,
  Rating,
  Select,
  Stack,
  Tabs,
  useMantineTheme,
} from '@mantine/core'
import BreadcrumbsNav from '@shared/bread-crumb/breadcrumb'
import { GeneralPadding } from '@shared/constants'
import { useSearchParams } from 'react-router-dom'
import { Responsive } from '@shared/hooks/responsive'
import { GradientContainer } from '@shared/ui/containers'
import { ProfileHeader } from './profileHeader'
import { useState } from 'react'
import { ResText } from '@shared/styles'
import { Listing } from './Listing'
import { NewestToOldestObj } from '../constant'
import { ProfileSection } from '@features/product-card/ui/profileSection'

function Ui() {
  const { isMobile } = Responsive()
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? 'Untitled'
  const theme = useMantineTheme()
  const [tab, setTab] = useState('Listing')
  const [selectedFilter, setSelectedFilter] = useState('newest')

  return (
    <GradientContainer>
      <Stack
        w="100%"
        gap={0}
        p={isMobile ? 'sm' : GeneralPadding}
      >

        <BreadcrumbsNav  items={[{ title: 'Home', href: '/' }, { title: name }]} />
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
              <Group
                justify="space-between"
                align="center"
                py={30}
              >
                <ResText
                  fontSize={24}
                  c="textPrimary"
                >
                  Reviews
                </ResText>

                <Select
                  data={NewestToOldestObj}
                  defaultValue={selectedFilter}
                  value={selectedFilter}
                  onChange={(value) => setSelectedFilter(value as string)}
                  checkIconPosition="left"
                />
              </Group>
              {Array.from({ length: 10 }).map(() => {
                return (
                  <Flex
                    style={{ borderBottom: '1px solid lightgray' }}
                    py={20}
                  >
                    <Stack>
                      <ProfileSection
                        product={{
                          username: 'monir198321',
                          timestamp: '12d 13m',
                        }}
                        allowPadding={false}
                      />
                      <Rating />
                      <ResText fontSize={14}>
                        Good price for the item, though the description could
                        have been clearer. Was really grateful that they were
                        flexible for meeting up Thanks so much!
                      </ResText>
                    </Stack>
                  </Flex>
                )
              })}
            </Tabs.Panel>
          </Tabs>
        </Container>
      </Stack>
    </GradientContainer>
  )
}

export { Ui }
