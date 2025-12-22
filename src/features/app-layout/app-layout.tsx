import { Flex } from '@mantine/core'
import { Content } from './content'
import Navbar from './navbar'
import { useLocation } from 'react-router-dom'

export const AppLayout = () => {
  const  { pathname }= useLocation()
  
  return (
    <Flex direction="column">
      {
        pathname === '/' && <Navbar />
      }
      <Content />
    </Flex>
  )
}
