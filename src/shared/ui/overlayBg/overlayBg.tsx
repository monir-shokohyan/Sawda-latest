import { BackgroundImage, Box, Flex } from '@mantine/core'
import { ReactNode } from 'react'

interface Props {
  src?: string
  children: ReactNode
  bgColor?: string
  blur?: string
}

const OverlayBg = ({
  src = '/cover.png',
  children,
  bgColor = 'rgba(0, 0, 0, 0.2)',
  blur = '3px',
}: Props) => {
  return (
    <Flex
      justify="space-between"
      w="100%"
      align="center"
    >
      <BackgroundImage
        src={src}
        style={{ overflow: 'hidden' }}
      >
        <Box
          p={10}
          style={{
            backgroundColor: bgColor,
            backdropFilter: `blur(${blur})`,
            WebkitBackdropFilter: `blur(${blur})`,
            height: '100%',
          }}
        >
          {children}
        </Box>
      </BackgroundImage>
    </Flex>
  )
}

export { OverlayBg }
