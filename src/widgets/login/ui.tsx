import { LoginFeature } from '@features/authentication/ui'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <LoginFeature />
    </Flex>
  )
}

export { Ui }
