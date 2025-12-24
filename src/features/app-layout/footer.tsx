import { Flex, Text, Box, Anchor, Group, Stack, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1024px)')

  const popularSearches = [
    'gaming',
    'pc',
    'ps5',
    'miu miu',
    'coach',
    'hirono',
    'fujifilm',
    'nintendo switch 2',
    'dress',
    'carpet',
    'ipad pro',
    'isubuzu v3',
    'jacky cheung',
    'monitor',
    'apple watch ultra 2',
    'iphone 15 pro',
    'grow a garden',
    'del',
    'fold 7',
    'spoil',
    'ipad mini',
    'marvel',
    'tsunami',
    'kitchen cabinet',
    'bass',
    'guitar',
    'bed frame',
    'printer',
    'samsung s24 ultra',
    'hermes',
    'iphone',
    'switch oled',
    'pickleball paddles',
    '1000n',
    'cd player',
    'iphone 12',
    'airpods 4',
    'prismatic evolution',
    'smart tv',
    'sg50 voucher',
    'iphone 16',
    'burberry',
    'iphone 13 pro',
    'skullpanda',
    'louis vuitton',
    'garmin',
    'on clouds',
    'miski',
  ]

  const footerLinks = [
    { label: 'Help Centre', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Sustainability', href: '#' },
    { label: 'Jobs', href: '#' },
    { label: 'Advertise with Us', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Business Conduct', href: '#' },
  ]

  return (
    <Box
      component="footer"
      style={{
        borderTop: '1px solid #e5e7eb',
        backgroundColor: 'var(--mantine-color-body)',
      }}
      py={isMobile ? 24 : 32}
      px={isMobile ? 16 : isTablet ? 40 : 100}
      mb={isMobile ? 60 : 0}
    >
      {/* Top Search Section */}
      <Box mb={isMobile ? 24 : 32}>
        <Text
          size="sm"
          fw={600}
          mb={12}
        >
          Top search
        </Text>
        <Flex
          gap={8}
          wrap="wrap"
        >
          {popularSearches.map((search, index) => (
            <Anchor
              key={index}
              href="#"
              size="sm"
              c="blue"
              style={{
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {search}
              {index < popularSearches.length - 1 && (
                <Text
                  component="span"
                  c="dimmed"
                  mx={4}
                >
                  |
                </Text>
              )}
            </Anchor>
          ))}
        </Flex>
      </Box>

      {/* Footer Links and Logo */}
      <Flex
        direction={isMobile ? 'column' : 'row'}
        justify="space-between"
        align={isMobile ? 'flex-start' : 'center'}
        gap={isMobile ? 16 : 24}
      >
        {/* Logo */}
        <Flex
          align="center"
          gap={4}
        >
          <Image
            src={'/Rite-eats.png'}
            h={isMobile ? '24px' : '25px'}
          />
        </Flex>

        {/* Links */}
        <Flex
          gap={isMobile ? 8 : 16}
          wrap="wrap"
          direction={isMobile ? 'column' : 'row'}
          align={isMobile ? 'flex-start' : 'center'}
        >
          {footerLinks.map((link, index) => (
            <Flex
              key={index}
              align="center"
              gap={8}
            >
              <Anchor
                href={link.href}
                size="sm"
                c="dimmed"
                style={{
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'var(--mantine-color-text)',
                  },
                }}
              >
                {link.label}
              </Anchor>
              {!isMobile && index < footerLinks.length - 1 && (
                <Text
                  c="dimmed"
                  size="sm"
                >
                  ·
                </Text>
              )}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export { Footer }
