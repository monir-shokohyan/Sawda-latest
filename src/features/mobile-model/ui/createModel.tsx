import { ProfileSection } from '@features/product-card/ui/profileSection'
import { Button, Flex, Modal } from '@mantine/core'
import { Paths } from '@shared/api/paths/paths'
import { HoveredItem, ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'
import { DarkMode } from '@shared/ui/darkMode'
import { LanguageDropDown } from '@shared/ui/language'
import { Logo } from '@shared/ui/logo'
import { OverlayBg } from '@shared/ui/overlayBg'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate } from 'react-router-dom'

const CreateModel = () => {
  const navigate = useNavigate()
  const { ProfileConstant, pathname } = useProfileDropDown({})

  return (
    <Modal
      opened={pathname.endsWith('add')}
      onClose={() => navigate(Paths.Main)}
      fullScreen
      title={<Logo />}
      pos="relative"
    >
      <Flex
        direction="column"
        h="100%"
      >
        <h1>add model</h1>
        {/* Content */}
        <Flex
          flex={1}
          align="center"
          justify="space-between"
          direction="column"
        >
          <Flex
            direction="column"
            w="100%"
            gap={10}
          >
            <OverlayBg>
              <ProfileSection
                product={{
                  username: 'Monir198323',
                  timestamp: '23day',
                  email: 'monir.shekoyans1@gmail.com',
                }}
                hoverUsername={false}
                showEmail
                showTime={false}
                usernameSize="1.2rem"
                timeSize="0.9rem"
                mobileSize="90px"
                direction="column"
                isStaticColor
              />
            </OverlayBg>
            {ProfileConstant.map((option) => {
              if (option.label.toLocaleLowerCase() !== 'logout') {
                return (
                  <HoveredItem
                    key={option.label}
                    $isActive={pathname === option.path}
                    onClick={() => {
                      if (option.handleClick) {
                        option.handleClick()
                      } else if (option.path) {
                        navigate(option.path)
                      }
                    }}
                  >
                    <Flex
                      gap={20}
                      c="primary"
                      align="center"
                    >
                      {option.icon}
                      <ResText
                        fontSize={TypographySize.SemiLarge}
                        c="darkText"
                      >
                        {option.label}
                      </ResText>
                    </Flex>
                  </HoveredItem>
                )
              }
            })}
          </Flex>
        </Flex>
      </Flex>
      <DarkMode
        pos="absolute"
        bottom={100}
        c="primary"
        iconSize={25}
        right={10}
        radius={5}
      />
      <LanguageDropDown
        pos="absolute"
        bottom={100}
        left={10}
        styles={{
          label: {
            fontWeight: '400',
          },
        }}
      />
      <Button
        w="94%"
        pos="absolute"
        bottom={30}
        left={10}
        radius={5}
      >
        Sign out
      </Button>
    </Modal>
  )
}

export { CreateModel }
