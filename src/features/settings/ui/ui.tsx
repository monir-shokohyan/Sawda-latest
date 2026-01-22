import { EditProfile } from '@features/edit-profile'
import { Stack } from '@mantine/core'
import BreadcrumbsNav from '@shared/bread-crumb/breadcrumb'
import { GeneralPadding } from '@shared/constants'
import { Responsive } from '@shared/hooks/responsive'
import { GradientContainer } from '@shared/ui/containers'
import { Layout } from './layout'

function Ui() {
  const { isMobile } = Responsive()

  return (
    <GradientContainer>
      <Stack
        w="100%"
        gap={0}
        px={isMobile ? '0px' : GeneralPadding}
        py={isMobile ? 'sm' : 'xl'}
      >
        <BreadcrumbsNav
          items={[{ title: 'Home', href: '/' }, { title: 'settings' }]}
        />
        <Layout>
          <EditProfile />
        </Layout>
      </Stack>
    </GradientContainer>
  )
}

export { Ui }
