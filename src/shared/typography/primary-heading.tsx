import { ResText } from '@shared/styles'
import { TypographySize } from './typography'
import { Props } from './type'

const PrimaryHeading = ({ children, ...props }: Props) => {
  return (
    <ResText
      fontSize={TypographySize.Large}
      c="darkText"
      {...props}
    >
      { children }
    </ResText>
  )
}

export { PrimaryHeading }
