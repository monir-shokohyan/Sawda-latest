import { ColorSwatch, Flex, Group, List, Stack, ThemeIcon } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { ResText } from '@shared/styles'
import { FaRegDotCircle } from 'react-icons/fa'
import { ProductsDetailsProps } from '../types'
import { TypographySize } from '@shared/typography'

const ProductDetails = ({
  DetailsObject,
  DetailsList,
}: ProductsDetailsProps) => {
  const { isMobile } = Responsive()
  return (
    <Stack mt={40}>
      <ResText
        c="darkText"
        fontSize={TypographySize.Normal}
      >
        Details
      </ResText>
      <Stack>
        <Flex
          wrap="wrap"
          gap={isMobile ? 15 : 25}
        >
          {DetailsObject.map((detail) => {
            if (detail.title.toLowerCase() === 'discount') {
              return (
                <Stack
                  w="45%"
                  gap={4}
                >
                  <ResText
                    fontWeight="400"
                    fontSize={TypographySize.Normal}
                    c="darkText"
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
                  gap={4}
                >
                  <ResText
                    fontSize={TypographySize.Normal}
                    fontWeight="400"
                    c="darkText"
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
                gap={4}
              >
                <ResText
                  fontSize={TypographySize.Normal}
                  fontWeight="400"
                  c="darkText"
                >
                  {detail.title}
                </ResText>
                <ResText fontSize={TypographySize.Normal}>{detail.description}</ResText>
              </Stack>
            )
          })}
        </Flex>

        <ResText fontSize={TypographySize.Normal}>
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
                <ResText fontSize={TypographySize.Normal}>{listInfo.title}</ResText>
              </List.Item>
            )
          })}
        </List>
      </Stack>
    </Stack>
  )
}

export { ProductDetails }
