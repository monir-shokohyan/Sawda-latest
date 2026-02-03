import { Flex } from '@mantine/core'
import { useSearchParams } from 'react-router-dom'
import { Responsive } from '@shared/hooks/responsive'
import { RightSection } from './rightSection'
import { LeftSection } from './leftSection'
import { ContainerWithBreadCrumb } from '@shared/ui/container-with-bread-crumb'

function Ui() {
  const { isMobile } = Responsive()
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? 'Untitled'

  return (
    <ContainerWithBreadCrumb title={name}>
      <Flex
        gap="2%"
        p={isMobile ? '0px' : 'xl'}
        wrap="wrap"
      >
        <LeftSection />
        <RightSection />
      </Flex>
    </ContainerWithBreadCrumb>
  )
}

export { Ui }
