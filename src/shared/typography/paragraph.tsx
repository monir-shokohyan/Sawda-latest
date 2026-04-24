import { ResText } from '@shared/styles'
import { TypographySize } from './typography'
import { Props } from './type'
import { DetectDirection } from '@shared/hooks'

const Paragraph = ({ children, ...props }: Props) => {
  const { textAlign } = DetectDirection(children as string)
  return (
    <ResText
      fontSize={TypographySize.SemiSmall}
      c="darkText"
      style={{ textAlign }}
      {...props}
    >
      {children}
    </ResText>
  )
}

export { Paragraph }
