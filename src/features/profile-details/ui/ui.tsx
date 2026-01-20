import {
  ActionIcon,
  Button,
  Container,
  Flex,
  Group,
  Stack,
  Tabs,
  TextInput,
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
import { FaSearch } from 'react-icons/fa'
import { FiFilter } from 'react-icons/fi'
import { Filter } from '@features/search-filter/ui/filter'
import { ProductScroll } from '@features/product-scroll/ui'

function Ui() {
  const { isMobile } = Responsive()
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? 'Untitled'
  const theme = useMantineTheme()
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
          // style={{border: '1px solid red'}}
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
              <Group
                justify="space-between"
                align="center"
                py={30}
              >
                <ResText
                  fontSize={24}
                  c="textPrimary"
                >
                  Listing
                </ResText>
                <Group
                  justify="space-between"
                  align="center"
                >
                  <TextInput
                    placeholder="Search listing..."
                    radius={5}
                    size="sm"
                    rightSection={
                      <ActionIcon variant="transparent">
                        <FaSearch />
                      </ActionIcon>
                    }
                  />

                  <Filter
                    iconSize="lg"
                    arrowPosition="bottom-end"
                  />
                </Group>
              </Group>
              <ProductScroll allowPadding={false} />
            </Tabs.Panel>

            <Tabs.Panel value="Reviews">Messages tab content</Tabs.Panel>
          </Tabs>
        </Container>
      </Stack>
    </GradientContainer>
  )
}

export { Ui }
