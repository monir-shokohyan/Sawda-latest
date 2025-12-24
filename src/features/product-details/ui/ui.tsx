import { Anchor, Breadcrumbs, Stack, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import BreadcrumbsNav from '@shared/bread-crumb/breadcrumb'
import { GeneralPadding } from '@shared/constants'
import { FaHome } from 'react-icons/fa'
import { useSearchParams, Link } from 'react-router-dom'

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
    </Stack>
  )
}

export { Ui }
