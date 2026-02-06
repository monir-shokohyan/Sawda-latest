import { ResText } from '@shared/styles'
import { TypographySize } from './typography'
import { Props } from './type'

const Paragraph = ({ children, ...props }: Props) => {
  return (
    <ResText
      fontSize={TypographySize.SemiSmall}
      c="darkText"
      {...props}
      
    >
      { children }
    </ResText>
  )
}

export { Paragraph }
