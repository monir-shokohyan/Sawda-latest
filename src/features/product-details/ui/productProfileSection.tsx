import { Avatar, Flex, Group, Rating } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'

const ProductProfileSection = () => {
  const { isMobile } = Responsive()
  return (
    <Group py={isMobile ? '5px' : 'xs'}>
      <Avatar
        color="blue"
        radius="50%"
        size={isMobile ? '33px' : 'lg'}
      >
        USN
      </Avatar>
      <Flex
        direction="column"
        gap={isMobile ? '4px' : '0px'}
      >
        <ResText
          c="darkText"
          fontSize={TypographySize.Normal}
        >
          User name
        </ResText>

        <Group>
          <ResText fontSize={TypographySize.Small}>5.00</ResText>

          <Rating
            value={3.5}
            fractions={2}
            readOnly
          />

          <ResText
            fontSize={TypographySize.Small}
            c="green"
          >
            5 reviews
          </ResText>
        </Group>
      </Flex>
    </Group>
  )
}

export { ProductProfileSection }
