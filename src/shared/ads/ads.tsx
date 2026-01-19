import {
  BackgroundImage,
  Center,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { FaBullhorn, FaBullseye, FaRocket, FaUsers } from 'react-icons/fa'

const Ads = () => {
  const { isMobile } = Responsive()

  return (
    <BackgroundImage
      src="https://static.vecteezy.com/system/resources/previews/027/566/585/non_2x/abstract-liquid-gradient-background-fluid-color-mix-blue-and-red-color-blend-modern-design-template-for-your-ads-banner-poster-cover-web-brochure-and-flyer-eps-10-vector.jpg"
      radius="lg"
    >
      <Center p={{ base: 'sm', md: 'md' }}>
        <Paper
          radius="lg"
          p={{ base: 'sm', md: 'md' }}
          shadow="xl"
          withBorder
          bg="rgba(255, 255, 255, 0.15)"
          style={{
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            textAlign: 'center',
            maxWidth: '900px',
            width: '100%',
          }}
        >
          <Title
            order={1}
            size={isMobile ? 'h4' : 'h1'}
            c="white"
            mb="lg"
            fw={800}
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Sawda is Ready to Showcase Your Business Ads!
          </Title>

          <Text
            size={isMobile ? 'sm' : '0.7rem'}
            c="white"
            opacity={0.95}
            mb="xl"
            fw={500}
          >
            Connect with thousands of local customers through powerful, targeted
            advertising.
          </Text>

          <Group
            justify="center"
            mt="xl"
            wrap="wrap"
          >
            <Stack
              align="center"
              gap="xs"
            >
              <FaBullhorn
                size={22}
                color="white"
              />
              <Text
                size={isMobile ? 'sm' : 'lg'}
                c="white"
                fw={600}
              >
                Promote Loudly
              </Text>
              <Text
                size={isMobile ? 'sm' : '0.7rem'}
                c="white"
                opacity={0.85}
              >
                Announce offers & events
              </Text>
            </Stack>

            <Stack
              align="center"
              gap="xs"
            >
              <FaBullseye
                size={22}
                color="white"
              />
              <Text
                size={isMobile ? 'sm' : 'lg'}
                c="white"
                fw={600}
              >
                Precise Targeting
              </Text>
              <Text
                size={isMobile ? 'sm' : '0.7rem'}
                c="white"
                opacity={0.85}
              >
                Reach the right audience
              </Text>
            </Stack>

            <Stack
              align="center"
              gap="xs"
            >
              <FaUsers
                size={22}
                color="white"
              />
              <Text
                size={isMobile ? 'sm' : 'lg'}
                c="white"
                fw={600}
              >
                Grow Your Reach
              </Text>
              <Text
                size={isMobile ? 'sm' : '0.7rem'}
                c="white"
                opacity={0.85}
              >
                Build loyal customers
              </Text>
            </Stack>

            <Stack
              align="center"
              gap="xs"
            >
              <FaRocket
                size={22}
                color="white"
              />
              <Text
                size={isMobile ? 'sm' : 'lg'}
                c="white"
                fw={600}
              >
                Boost Sales
              </Text>
              <Text
                size={isMobile ? 'sm' : '0.7rem'}
                c="white"
                opacity={0.85}
              >
                Drive traffic & conversions
              </Text>
            </Stack>
          </Group>

          <Text
            size={isMobile ? 'sm' : 'lg'}
            c="white"
            mt="xl"
            fw={600}
            opacity={0.9}
          >
            Start advertising on Sawda today — get in touch now!
          </Text>
        </Paper>
      </Center>
    </BackgroundImage>
  )
}

export default Ads
