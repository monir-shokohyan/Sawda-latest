import { Flex, Image } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'

const Ui = () => {
  const { isMobile } = Responsive()
  return (
    <Flex
      align="center"
      gap={4}
    >
      <Image
        src={'/Rite-eats.png'}
        h={isMobile ? '24px' : '25px'}
      />
    </Flex>
  )
}

export { Ui }
