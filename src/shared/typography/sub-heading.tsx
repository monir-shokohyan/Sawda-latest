import { ResText } from '@shared/styles'
import { TypographySize } from './typography'
import { Props } from './type'

const SubHeading = ({ children, ...props }: Props) => {
  return (
    <ResText
      fontSize={TypographySize.Normal}
      c="darkText"
      {...props}
    >
      {children}
    </ResText>
  )
}

export { SubHeading }
