import { Flex, useMantineTheme } from '@mantine/core'
import { useManageTheme } from '../modal'
import { SettingsListConentWrapper } from '@shared/ui/setting-list-content-wrapper'
import ThemeCard from './themeCard'
import { Responsive } from '@shared/hooks/responsive'

const Ui = () => {
  const { ThemeObj } = useManageTheme()
  const theme = useMantineTheme()
  const { isMobile } = Responsive()
  return (
    <>
      <SettingsListConentWrapper
        allowButton={false}
        title="Theme"
        buttonTitle=""
      >
        <Flex
          gap={20}
          wrap="wrap"
          p={20}
          justify="space-evenly"
        >
          {ThemeObj.map((themeCard) => {
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
      </SettingsListConentWrapper>
    </>
  )
}

export { Ui }
