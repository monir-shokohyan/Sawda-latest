import { Flex, Group, Stack, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import BreadcrumbsNav from '@shared/bread-crumb/breadcrumb'
import { GeneralPadding } from '@shared/constants'
import { SButton } from '@shared/styles'
import { ImageCarousel } from '@shared/ui/carousal'
import { MdEditDocument, MdOutlineFavorite } from 'react-icons/md'
import { useSearchParams } from 'react-router-dom'

function Ui() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? 'Untitled'

  return (
    <Stack
      w="100%"
      gap={0}
      p={isMobile ? 'md' : GeneralPadding}
    >
      <BreadcrumbsNav items={[{ title: 'Home', href: '/' }, { title: name }]} />
      <Flex
        gap={10}
        p={isMobile ? '0px' : GeneralPadding}
        wrap="wrap"
      >
        <Stack w={isMobile ? '100%' : '65%'}>
          <Text>2019 Toyota Land Cruiser Prado 2.8 AT 112,000 km</Text>
          <Flex gap={10}>
            <SButton leftSection={<MdOutlineFavorite />}>
              <Text size="sm">Add to favorites</Text>
            </SButton>
            <SButton leftSection={<MdEditDocument />}>
              <Text size="sm">Add a note</Text>
            </SButton>
          </Flex>
          <ImageCarousel />
        </Stack>
        <Group w={isMobile ? '100%' : '35%'}></Group>
      </Flex>
    </Stack>
  )
}

export { Ui }
