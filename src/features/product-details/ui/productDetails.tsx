import { ColorSwatch, Flex, Group, List, Stack, ThemeIcon } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { ResText } from '@shared/styles'
import { FaRegDotCircle } from 'react-icons/fa'
import { ProductsDetailsProps } from '../types'

const ProductDetails = ({
  DetailsObject,
  DetailsList,
}: ProductsDetailsProps) => {
  const { isMobile } = Responsive()
  return (
    <Stack mt={40}>
      <ResText fontSize={26}>Details</ResText>
      <Stack >
        <Flex
          wrap="wrap"
          gap={30}
        >
          {DetailsObject.map((detail) => {
            if (detail.title.toLowerCase() === 'discount') {
              return (
                <Stack
                  w="45%"
                  gap={7}
                >
                  <ResText
                    fontWeight="600"
                    fontSize={18}
                  >
                    {detail.title}
                  </ResText>
                  <ResText fontSize={16}>{detail.description} %</ResText>
                </Stack>
              )
            }
            if (detail.title.toLowerCase() === 'color') {
              return (
                <Stack
                  w="45%"
                  gap={7}
                >
                  <ResText
                    fontSize={18}
                    fontWeight="600"
                  >
                    {detail.title}
                  </ResText>
                  <Group gap={7}>
                    {Array.isArray(detail.description) &&
                      detail.description.map((colorObj) => {
                        return (
                          <ColorSwatch
                            size={isMobile ? 20 : 30}
                            color={colorObj || '#009790'}
                          />
                        )
                      })}
                  </Group>
                </Stack>
              )
            }

            return (
              <Stack
                w="45%"
                gap={7}
              >
                <ResText
                  fontSize={18}
                  fontWeight="600"
                >
                  {detail.title}
                </ResText>
                <ResText fontSize={16}>{detail.description}</ResText>
              </Stack>
            )
          })}
        </Flex>

        <ResText fontSize={16}>
          True wireless freedom with premium sound. Deep bass, crystal-clear
          highs, and active noise cancellation that actually works. 32-hour
          total battery life (8 hours per charge + case), IPX5 sweat-proof,
          touch controls, and instant pairing.
        </ResText>

        <List
          p={0}
          icon={
            <ThemeIcon
              color="primary"
              variant="transparent"
              size="md"
            >
              <FaRegDotCircle color="currentColor" />
            </ThemeIcon>
          }
        >
          {DetailsList.map((listInfo) => {
            return (
              <List.Item>
                <ResText fontSize={16}>{listInfo.title}</ResText>
              </List.Item>
            )
          })}
        </List>
      </Stack>
    </Stack>
  )
}

export { ProductDetails }
