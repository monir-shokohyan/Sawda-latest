import { Button, Flex, Group, Stack, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import BreadcrumbsNav from '@shared/bread-crumb/breadcrumb'
import { GeneralPadding } from '@shared/constants'
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
        p={GeneralPadding}
      >
        <Stack w="65%">
          <Text>2019 Toyota Land Cruiser Prado 2.8 AT 112,000 km</Text>
          <Flex gap={10}>
            <Button
              color="background"
              c="textPrimary"
              leftSection={<MdOutlineFavorite />}
            >
              <Text size="sm">Add to favorites</Text>
            </Button>
            <Button
              color="background"
              c="textPrimary"
              leftSection={<MdEditDocument />}
            >
              <Text size="sm">Add a note</Text>
            </Button>
          </Flex>
        </Stack>
        <Group w="35%"></Group>
      </Flex>
    </Stack>
  )
}

export { Ui }
