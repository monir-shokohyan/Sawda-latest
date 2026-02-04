import { Flex } from '@mantine/core'
import { Navbar } from './navbar'
import { Footer } from './footer'
import { Tooltip } from 'react-tooltip'
import { ScrollToTop } from '@shared/ui/scroll-top'
import { SecureContent } from './secure-content'

export const SecureLayout = () => {
  return (
    <Flex
      direction="column"
      // w="100dvw"
      h="dvh"
    >
      <ScrollToTop />
      <Navbar />
      <SecureContent />
      <Footer />
      <Tooltip id="global-tooltip" />
    </Flex>
  )
}
