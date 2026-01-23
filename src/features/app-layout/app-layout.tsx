import { Flex } from '@mantine/core'
import { Content } from './content'
import { Navbar } from './navbar'
import { Footer } from './footer'
import { Tooltip } from 'react-tooltip'
import { ScrollToTop } from '@shared/ui/scroll-top'

export const AppLayout = () => {
  return (
    <Flex direction="column">
      <ScrollToTop />
      <Navbar />
      <Content />
      <Footer />
      <Tooltip id="global-tooltip" />
    </Flex>
  )
}
