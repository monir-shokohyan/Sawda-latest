import { Flex, useMantineTheme } from '@mantine/core'
import { useManageTheme } from '../modal'
import { FormWrapper } from '@shared/ui/form-wrapper'
import ThemeCard from './themeCard'
import { Responsive } from '@shared/hooks/responsive'

const Ui = () => {
  const { modifiedThemeObj, t } = useManageTheme()
  const theme = useMantineTheme()
  const { isMobile } = Responsive()
  return (
    <>
      <FormWrapper
        allowButton={false}
        title={t('settings.theme')}
        buttonTitle=""
      >
        <Flex
          gap={20}
          wrap="wrap"
          p={20}
          justify="space-evenly"
        >
          {modifiedThemeObj.map((themeCard) => {
            const { src, textFooter, handleClick, alt, active } = themeCard
            return (
              <ThemeCard
                src={src}
                footerText={textFooter}
                handleClick={() => handleClick()}
                alt={alt}
                imageHeight={isMobile ? 155 : 200}
                size={isMobile ? 200 : 250}
                styles={{
                  root: {
                    border: active
                      ? `1px solid ${theme.colors.primary[8]}`
                      : '0px',
                  },
                }}
              />
            )
          })}
        </Flex>
      </FormWrapper>
    </>
  )
}

export { Ui }
