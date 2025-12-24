import { Flex } from '@mantine/core'
import { Content } from './content'
import { Navbar } from './navbar'
import { useLocation } from 'react-router-dom'
import { Footer } from './footer'

export const AppLayout = () => {
  const { pathname } = useLocation()

  return (
    <Flex direction="column">
      <Navbar />
      <Content />
      <Footer />
    </Flex>
  )
}
