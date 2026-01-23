import { Flex } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { ResText, SaveButton } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { ReactNode } from 'react';

interface Props {
    handleSubmit: () => void;
    title: string;
    buttonTitle: string;
    children: ReactNode
    allowButton?: boolean
}

const Ui = ({handleSubmit, title, buttonTitle, children, allowButton = false}:Props) => {
    const { isMobile } = Responsive()
  return (
      <Flex
        py={isMobile ? 20 : 40}
        px={isMobile ? 10 : 40}
        direction="column"
        bg="background.8"
        style={{
          flexGrow: '1'
        }}
      >
        <ResText
          c="darkText"
          fontSize={TypographySize.Large}
        >
          {title}
        </ResText>

        <div>
          {children}
          {
            allowButton && <SaveButton
                type="button"
                onClick={() => handleSubmit()}
            >
                {buttonTitle}
            </SaveButton>
          }
        </div>
      </Flex>
  )
}

export { Ui }
