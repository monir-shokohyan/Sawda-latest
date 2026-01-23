import { Card, CardProps, Image, Text } from '@mantine/core'
import { ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'

interface PropsType extends CardProps {
  src: string
  footerText: string
  handleClick: () => void
  size?: number
  alt: string
  imageHeight: number
}
const ThemeCard = ({
  src,
  footerText,
  handleClick,
  alt,
  imageHeight = 250,
  size = 300,
  ...props
}: PropsType) => {
  return (
    <Card
      shadow="sm"
      padding="xl"
      h={size}
      w={size}
      onClick={handleClick}
      {...props}
      bg="background.7"
    >
      <Card.Section>
        <Image
          src={src}
          h={imageHeight}
          alt={alt}
        />
      </Card.Section>

      <ResText
        c="darkText"
        fontSize={TypographySize.SemiLarge}
        $textalign="center"
        mt={10}
      >
        {footerText}
      </ResText>
    </Card>
  )
}

export default ThemeCard
