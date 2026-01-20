import { Flex } from '@mantine/core'
import { ReactNode } from 'react'

const LoaderContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
    >
      {children}
    </Flex>
  )
}

export { LoaderContainer }
