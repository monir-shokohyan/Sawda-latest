import { Flex } from '@mantine/core'
import { Content } from './content'
import { Navbar } from './navbar'
import { Footer } from './footer'
import { Tooltip } from 'react-tooltip'

export const AppLayout = () => {
  return (
    <Flex direction="column">
      <Navbar />
      <Content />
      <Footer />
      <Tooltip id="global-tooltip" />
    </Flex>
  )
}
