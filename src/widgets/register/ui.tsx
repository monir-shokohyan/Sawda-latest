import { RegisterFeature } from '@features/authentication/ui'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <RegisterFeature />
    </Flex>
  )
}

export { Ui }
