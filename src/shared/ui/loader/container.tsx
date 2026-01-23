import { Flex } from '@mantine/core'
import { ReactNode } from 'react'

const LoaderContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      w="100%"
      h="100dvh"
      justify="center"
      align="center"
      bg="background.9"
      style={{ overflowX: 'hidden' }}
    >
      {children}
    </Flex>
  )
}

export { LoaderContainer }
