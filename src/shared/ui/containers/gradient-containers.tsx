import { ReactNode } from 'react'
import { Flex, FlexProps } from '@mantine/core'
import styled, { css } from 'styled-components'



const COLOR_TOP = '#FFFFFF'
const COLOR_BOTTOM = '#DFEDEE'

type GradientDirection = 'top-to-bottom' | 'bottom-to-top'

interface GradientFlexProps {
  $gradientDirection?: GradientDirection
  $paddingTop?: string
}

interface GradientContainerProps extends FlexProps {
  children: ReactNode;
  gDirection?: GradientDirection;
}
export const GradientFlex = styled(Flex)<GradientFlexProps & FlexProps>`
  background: ${({ $gradientDirection = 'top-to-bottom' }) =>
    $gradientDirection === 'top-to-bottom'
      ? css`
          linear-gradient(to bottom, ${COLOR_TOP}, ${COLOR_BOTTOM});
        `
      : css`
          linear-gradient(to top, ${COLOR_TOP}, ${COLOR_BOTTOM});
        `};
`

const GradientContainer = ({
  children,
  gDirection = 'top-to-bottom',
  ...props
}: GradientContainerProps) => {
  return (
    <GradientFlex
      $gradientDirection={gDirection}
      direction="column"
      {...props}
    >
      {children}
    </GradientFlex>
  )
}

export { GradientContainer }
