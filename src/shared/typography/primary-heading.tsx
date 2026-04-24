import { ResText } from '@shared/styles'
import { TypographySize } from './typography'
import { Props } from './type'
import { DetectDirection } from '@shared/hooks'

const PrimaryHeading = ({ children, ...props }: Props) => {
  const { textAlign } = DetectDirection(children as string)
  return (
    <ResText
      fontSize={TypographySize.SemiLarge}
      c="darkText"
      style={{ textAlign }}
      {...props}
    >
      {children}
    </ResText>
  )
}

export { PrimaryHeading }
