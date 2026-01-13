import { ReactNode } from 'react'
import { Flex, FlexProps } from '@mantine/core'

interface GradientContainerProps extends FlexProps {
  children: ReactNode
}

const GradientContainer = ({
  children,
  ...props
}: GradientContainerProps) => {
  return (
    <Flex
      direction="column"
      bg="background.9"
      {...props}
    >
      {children}
    </Flex>
  )
}

export { GradientContainer }
