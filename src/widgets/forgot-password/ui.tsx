import { ForgotPasswordFeature } from '@features/authentication/ui'
import { MobileModel } from '@features/mobile-model/ui'
import { Flex } from '@mantine/core'

const Ui = () => {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <ForgotPasswordFeature />
    </Flex>
  )
}

export { Ui }
