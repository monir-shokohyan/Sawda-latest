import {
  Avatar,
  Flex,
  Group,
  Rating,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import BreadcrumbsNav from '@shared/bread-crumb/breadcrumb'
import { GeneralPadding } from '@shared/constants'
import { OpacityButton, ResText, SButton, SGButton } from '@shared/styles'
import { ImageCarousel } from '@shared/ui/carousal'
import { MdEditDocument, MdOutlineFavorite } from 'react-icons/md'
import { useSearchParams } from 'react-router-dom'
import { DetailsList, DetailsObject } from '../constant'
import { ProductDetails } from './productDetails'
import { Responsive } from '@shared/hooks/responsive'
import { SimilarAdsSection } from './similarProducts'
import { ReplySection } from './replySection'

function Ui() {
  const { isMobile } = Responsive()
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? 'Untitled'
  const theme = useMantineTheme()

  return (
    <Stack
      w="100%"
      gap={0}
      p={isMobile ? 'md' : GeneralPadding}
    >
      <BreadcrumbsNav items={[{ title: 'Home', href: '/' }, { title: name }]} />
      <Flex
        gap="2%"
        p={isMobile ? '0px' : GeneralPadding}
        py={isMobile ? '20px' : GeneralPadding}
        wrap="wrap"
      >
        <Stack w={isMobile ? '100%' : '60%'}>
          <ResText fontSize={26}>
            2019 Toyota Land Cruiser Prado 2.8 AT 112,000 km
          </ResText>
          <Flex gap={10}>
            <SButton radius={3} leftSection={<MdOutlineFavorite />}>
              <Text size="sm">Add to favorites</Text>
            </SButton>
            <SButton radius={3} leftSection={<MdEditDocument />}>
              <Text size="sm">Add a note</Text>
            </SButton>
          </Flex>
          <ImageCarousel />
          <ProductDetails
            DetailsList={DetailsList}
            DetailsObject={DetailsObject}
          />

          {!isMobile && <SimilarAdsSection />}
        </Stack>

        <Stack
          w={isMobile ? '100%' : '38%'}
          pos="sticky"
          top={30}
          right={0}
          h={isMobile ? 'auto' : '100vh'}
          mb={isMobile ? 100 : 0}
        >
          <ResText fontSize={26}>200,000 AF</ResText>
          <Stack>
            <SButton
              size="xl"
              radius={3}
            >
              <Stack
                gap={0}
                justify="center"
                align="center"
                color="white"
              >
                <Text size="lg">Show phone</Text>
                <Text size="sm">+93750 XXX XXX</Text>
              </Stack>
            </SButton>
            <SGButton
              size="xl"
              bg="green"
              radius={3}
            >
              <Text size="lg">Write a message</Text>
            </SGButton>
          </Stack>

          <Group
            px="md"
            py={isMobile ? '5px' : 'xs'}
            style={{ borderBottom: '1px solid #e8e8e8' }}
          >
            <Avatar
              color="blue"
              radius="50%"
              size={isMobile ? '33px' : 'xl'}
            >
              USN
            </Avatar>
            <Flex
              direction="column"
              gap={isMobile ? '4px' : '0px'}
            >
              <ResText fontSize={22}>User name</ResText>

              <Group>
                <ResText fontSize={14}>5.00</ResText>

                <Rating
                  value={3.5}
                  fractions={2}
                  readOnly
                />

                <ResText
                  fontSize={14}
                  c="green"
                >
                  5 reviews
                </ResText>
              </Group>
            </Flex>
          </Group>

          <OpacityButton
            bg={theme.colors.backgroundInput[8]}
            radius={3}
            c="gray"
          >
            Subscribe to the seller
          </OpacityButton>

          <ReplySection />
          {isMobile && <SimilarAdsSection />}
        </Stack>
      </Flex>
    </Stack>
  )
}

export { Ui }
