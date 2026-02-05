import { Flex } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { ResText, SButton } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { ReactNode } from 'react'

interface Props {
  handleSubmit?: () => void
  title?: string
  buttonTitle?: string
  children: ReactNode
  allowButton?: boolean
  buttonLeftSection?: ReactNode
  allowPadding?: boolean
  buttonFullWidth?: boolean
  transparent?: boolean
}

const Ui = ({
  handleSubmit,
  title,
  buttonTitle,
  children,
  allowButton = false,
  buttonLeftSection,
  allowPadding = true,
  buttonFullWidth = false,
  transparent = false,
}: Props) => {
  const { isMobile } = Responsive()
  const paddingY = isMobile ? 20 : 40
  const paddingX = isMobile ? 10 : 40
  return (
    <Flex
      py={allowPadding ? paddingY : '0px'}
      px={allowPadding ? paddingX : '10px'}
      direction="column"
      bg={transparent ? "transparent" : "background.8"}
      style={{
        flexGrow: '1',
      }}
    >
      {title && (
        <ResText
          c="darkText"
          fontSize={TypographySize.Large}
        >
          {title}
        </ResText>
      )}

      <div style={{ marginTop: '20px' }}>
        {children}
        {allowButton && (
          <SButton
            type="button"
            onClick={() => handleSubmit?.()}
            leftSection={buttonLeftSection}
            fullWidth={buttonFullWidth}
          >
            {buttonTitle}
          </SButton>
        )}
      </div>
    </Flex>
  )
}

export { Ui }
