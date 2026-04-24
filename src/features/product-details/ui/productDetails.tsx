import {
  ColorSwatch,
  Divider,
  Flex,
  Group,
  List,
  Stack,
  ThemeIcon,
} from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { FaRegDotCircle } from 'react-icons/fa'
import { ProductsDetailsProps } from '../types'
import { Paragraph } from '@shared/typography/paragraph'
import { useIsRtlLang } from '@shared/hooks'

const ProductDetails = ({
  DetailsObject,
  DetailsList,
}: ProductsDetailsProps) => {
  const { isMobile } = Responsive()
  const { textAlign } = useIsRtlLang()
  return (
    <Stack>
      <Stack>
        <Flex
          wrap="wrap"
          gap={isMobile ? 15 : 25}
        >
          {DetailsObject.map((detail) => {
            if (detail.id.toLowerCase() === 'discount') {
              return (
                <Stack
                  w="45%"
                  gap={4}
                >
                  <Paragraph style={{textAlign}}>{detail.title}</Paragraph>
                  <Paragraph style={{textAlign}}>{detail.description} %</Paragraph>
                </Stack>
              )
            }
            if (detail.id.toLowerCase() === 'color') {
              return (
                <Stack
                  w="45%"
                  gap={4}
                >
                  <Paragraph fw={500}>{detail.title}</Paragraph>
                  <Group gap={7}>
                    {Array.isArray(detail.description) &&
                      detail.description.map((colorObj) => {
                        return (
                          <ColorSwatch
                            size={isMobile ? 15 : 20}
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
                <Paragraph style={{textAlign}} fw={500}>{detail.title}</Paragraph>
                <Paragraph style={{textAlign}}>{detail.description}</Paragraph>
              </Stack>
            )
          })}
        </Flex>

        <Divider />

        <Paragraph >
          True wireless freedom with premium sound. Deep bass, crystal-clear
          highs, and active noise cancellation that actually works. 32-hour
          total battery life (8 hours per charge + case), IPX5 sweat-proof,
          touch controls, and instant pairing.
        </Paragraph>

        <List
          p={0}
          icon={
            <ThemeIcon
              color="primary"
              variant="transparent"
              size="md"
            >
              <FaRegDotCircle color="darkText" />
            </ThemeIcon>
          }
        >
          {DetailsList.map((listInfo) => {
            return (
              <List.Item style={{textAlign}}>
                <Paragraph>{listInfo.title}</Paragraph>
              </List.Item>
            )
          })}
        </List>
        <Divider />
      </Stack>
    </Stack>
  )
}

export { ProductDetails }
