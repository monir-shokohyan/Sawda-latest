import { ResText } from '@shared/styles'
import { TypographySize } from './typography'
import { Props } from './type'

const SubParagraph = ({ children, ...props }: Props) => {
  return (
    <ResText
      fontSize={TypographySize.Small}
      c="darkText"
      {...props}
      
    >
      { children }
    </ResText>
  )
}

export { SubParagraph }
