import { Flex, useMantineTheme } from '@mantine/core'
import { useManageTheme } from '../modal'
import { SettingsListConentWrapper } from '@shared/ui/setting-list-content-wrapper'
import ThemeCard from './themeCard'

const Ui = () => {
  const { ThemeObj  } = useManageTheme()
  const theme = useMantineTheme()
  return (
    <>
      <SettingsListConentWrapper
        allowButton={false}
        title="Theme"
        buttonTitle=""
      >
        <Flex
          gap={3}
          wrap="wrap"
          p={20}
          justify="space-evenly"
        >
          {
            ThemeObj.map((themeCard) => {
              const { src, textFooter, handleClick, alt, active } = themeCard
              return (
              <ThemeCard src={src}
               footerText={textFooter}
               handleClick={() => handleClick()}
               alt={alt}
               imageHeight={200}
               size={250}
               styles={{
                root: {
                  border: active ? `1px solid ${theme.colors.primary[8]}` : '0px'
                }
               }}
               /> )
              })
            }
        </Flex>
      </SettingsListConentWrapper>
    </>
  )
}

export { Ui }
