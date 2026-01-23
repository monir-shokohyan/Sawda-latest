import { ProfileSection } from "@features/product-card/ui/profileSection"
import { Button, Collapse, Flex, Modal } from "@mantine/core"
import { Paths } from "@shared/api/paths/paths"
import { DarkMode } from "@shared/ui/darkMode"
import { LanguageDropDown } from "@shared/ui/language"
import { Logo } from "@shared/ui/logo"
import { MenuItem } from "@shared/ui/Menu"
import { OverlayBg } from "@shared/ui/overlayBg"
import { useProfileDropDown } from "@shared/ui/profile/hook"
import { useNavigate } from "react-router-dom"

const ProfileModel = () => {
    const navigate = useNavigate()
    const { ProfileConstant, pathname } = useProfileDropDown({})

    return (
      <Modal
        opened={pathname.endsWith('profile')}
        onClose={() => navigate(Paths.Main)}
        fullScreen
        title={<Logo />}
        pos="relative"
      >
        <Flex
          direction="column"
          h="100%"
        >
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
                    <MenuItem option={option} key={option.label} />
                  )
                }
              })}
               <Collapse in={true}>
              {ProfileConstant.map((option) => {
                if (option.label.toLocaleLowerCase() !== 'logout') {
                  return (
                    <MenuItem option={option} key={option.label} />
                  )
                }
              })}
        
               </Collapse>
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

export  { ProfileModel }
