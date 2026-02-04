import { Flex, Image } from '@mantine/core'
import { Auth } from '@shared/authentication/auth'
import { Responsive } from '@shared/hooks/responsive'

const Ui = () => {
  const { isMobile } = Responsive()
  const { ToggleAuth } = Auth()
  return (
    <Flex
      align="center"
      gap={4}
      onClick={() => ToggleAuth()}
    >
      <Image
        src={'/Rite-eats.png'}
        h={isMobile ? '24px' : '25px'}
      />
    </Flex>
  )
}

export { Ui }
