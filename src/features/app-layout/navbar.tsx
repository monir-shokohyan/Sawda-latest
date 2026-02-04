import { Drawer, Flex, useMantineTheme } from '@mantine/core'
import { CategoryDropDown } from '@shared/ui/category/categoryDropDown'
import { DarkMode } from '@shared/ui/darkMode/darkMode'
import { LanguageDropDown } from '@shared/ui/language/languageDropDown'
import { ProfileDropDown } from '@shared/ui/profile/profileDropDown'
import {
  MdOutlineFavoriteBorder,
  MdOutlineMessage,
  MdOutlineNotifications,
} from 'react-icons/md'
import { MobileDownbar } from './mobile-navbar'
import { SActionIcon, SButton } from '@shared/styles'
import { Responsive } from '@shared/hooks/responsive'
import { Logo } from '@shared/ui/logo'
import { useNavigate } from 'react-router-dom'
import { Paths } from '@shared/api/paths/paths'
import { useDisclosure } from '@mantine/hooks'
import { NotificationStatus } from '@features/notification-status'
import { TbUserPlus } from 'react-icons/tb'
import { Following } from '@features/followings'

const Navbar = () => {
  const { isMobile, isTablet } = Responsive()
  const navigate = useNavigate()
  const [opened, { open, close }] = useDisclosure()
  const [openedFollowing, { open: openFollowing, close: closeFollowing }] =
    useDisclosure()

  return (
    <>
      <Flex
        px={isMobile ? 16 : isTablet ? 40 : 100}
        justify="space-between"
        h={53}
        align="center"
        bg="background.8"
      >
        <Flex
          align="center"
          gap={isMobile ? 12 : 24}
        >
          <Logo />
          {!isMobile && <CategoryDropDown />}
        </Flex>

        <Flex
          align="center"
          gap={isMobile ? 5 : 16}
        >
          {!isMobile && <LanguageDropDown />}
          <Flex>
            {!isMobile && (
              <>
                <SActionIcon
                  variant="subtle"
                  $isSubtle
                  color="darkText"
                  size="lg"
                  onClick={() => navigate(`${Paths.Favorites}monir`)}
                >
                  <MdOutlineFavoriteBorder size={20} />
                </SActionIcon>

                <SActionIcon
                  variant="subtle"
                  $isSubtle
                  color="darkText"
                  size="lg"
                  onClick={() => openFollowing()}
                >
                  <TbUserPlus size={20} />
                </SActionIcon>

                <SActionIcon
                  variant="subtle"
                  $isSubtle
                  color="darkText"
                  size="lg"
                  onClick={() => open()}
                >
                  <MdOutlineNotifications size={20} />
                </SActionIcon>

                <SActionIcon
                  variant="subtle"
                  $isSubtle
                  color="darkText"
                  size="lg"
                  onClick={() => navigate(`${Paths.Message}monir`)}
                >
                  <MdOutlineMessage size={20} />
                </SActionIcon>
              </>
            )}

            <DarkMode />
          </Flex>
          {!isMobile && (
            <ProfileDropDown
              p={0}
              styles={{
                section: {
                  marginInline: isMobile ? '0px' : '8px',
                },
              }}
            />
          )}
          {!isMobile && (
            <SButton
              variant="subtle"
              color="lightText"
              size="sm"
              p={0}
              px={10}
              bg="originalBlue"
              onClick={() => navigate(Paths.AddProduct)}
            >
              Place an ad
            </SButton>
          )}
        </Flex>
      </Flex>

      {isMobile && <MobileDownbar />}
      {!isMobile && (
        <Drawer
          opened={opened}
          onClose={close}
          transitionProps={{
            transition: 'fade-right',
            duration: 150,
            timingFunction: 'linear',
          }}
          position="right"
          title="Notification"
        >
          <NotificationStatus onNotificationSelect={() => alert('wokring')} />
        </Drawer>
      )}
      {!isMobile && (
        <Drawer
          opened={openedFollowing}
          onClose={closeFollowing}
          transitionProps={{
            transition: 'fade-right',
            duration: 150,
            timingFunction: 'linear',
          }}
          position="right"
          title="Following"
        >
          <Following onFollowingSelect={() => alert('wokring')} />
        </Drawer>
      )}
    </>
  )
}

export { Navbar }
