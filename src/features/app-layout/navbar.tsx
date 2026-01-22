import {
  Flex,
  ActionIcon,
  Image,
  Modal,
  Text,
  useMantineTheme,
  Button,
} from '@mantine/core'
import { CategoryDropDown } from '@shared/ui/category/categoryDropDown'
import { DarkMode } from '@shared/ui/darkMode/darkMode'
import { LanguageDropDown } from '@shared/ui/language/languageDropDown'
import { ProfileDrownDown } from '@shared/ui/profile/profileDrownDown'
import {
  MdOutlineFavoriteBorder,
  MdOutlineMessage,
  MdOutlineNotifications,
  MdOutlineShoppingCart,
  MdArrowBack,
} from 'react-icons/md'
import { useState } from 'react'
import { MobileDownbar } from './mobile-navbar'
import { HoveredItem, ResText, SButton } from '@shared/styles'
import { Responsive } from '@shared/hooks/responsive'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useLocation, useNavigate } from 'react-router-dom'
import { ProfileSection } from '@features/product-card/ui/profileSection'

const Navbar = () => {
  const [openedModal, setOpenedModal] = useState<
    'message' | 'profile' | 'add' | null
  >(null)

  const { isMobile, isTablet } = Responsive()
  const closeModal = () => setOpenedModal(null)
  const { ProfileConstant } = useProfileDropDown({ id: 'monir' })
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const theme = useMantineTheme()

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
          <Flex
            align="center"
            gap={4}
          >
            <Image
              src={'/Rite-eats.png'}
              h={isMobile ? '24px' : '25px'}
            />
          </Flex>

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
                <ActionIcon
                  variant="subtle"
                  color="darkText"
                  size="lg"
                >
                  <MdOutlineFavoriteBorder size={20} />
                </ActionIcon>

                <ActionIcon
                  variant="subtle"
                  color="darkText"
                  size="lg"
                >
                  <MdOutlineShoppingCart size={20} />
                </ActionIcon>

                <ActionIcon
                  variant="subtle"
                  color="darkText"
                  size="lg"
                >
                  <MdOutlineNotifications size={20} />
                </ActionIcon>

                <ActionIcon
                  variant="subtle"
                  color="darkText"
                  size="lg"
                >
                  <MdOutlineMessage size={20} />
                </ActionIcon>
              </>
            )}

            <DarkMode />
          </Flex>
          {!isMobile && <ProfileDrownDown />}
          {!isMobile && (
            <SButton
              variant="subtle"
              color="lightText"
              size="sm"
              p={0}
              px={10}
              bg="originalBlue"
            >
              Place an ad
            </SButton>
          )}
        </Flex>
      </Flex>

      {isMobile && <MobileDownbar setOpenedModal={setOpenedModal} />}

      {/* Message Modal */}
      <Modal
        opened={openedModal === 'message'}
        onClose={closeModal}
        fullScreen
        padding={0}
        withCloseButton={false}
      >
        <Flex
          direction="column"
          h="100dvh"
        >
          {/* Header */}
          <Flex
            align="center"
            gap={16}
            px={16}
            h={56}
            style={{ borderBottom: '1px solid #e5e7eb' }}
          >
            <ActionIcon
              variant="subtle"
              color="textPrimary"
              size="lg"
              onClick={closeModal}
            >
              <MdArrowBack size={24} />
            </ActionIcon>
            <Text
              size="lg"
              fw={600}
            >
              Messages
            </Text>
          </Flex>

          {/* Content */}
          <Flex
            flex={1}
            p={16}
            align="center"
            justify="center"
          >
            <Text c="dimmed">Messages content goes here</Text>
          </Flex>
        </Flex>
      </Modal>

      {/* Profile Modal */}
      <Modal
        opened={openedModal === 'profile'}
        onClose={closeModal}
        fullScreen
        padding={20}
        title="Profile"
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
              <Flex
                justify="space-between"
                w="100%"
                align="center"
                py={20}
                style={{ borderBottom: '1px solid lightgray' }}
              >
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
                  mobileSize="70px"
                  direction="column"
                />
              </Flex>
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
                          closeModal()
                        }
                      }}
                    >
                      <Flex
                        gap={20}
                        c="primary"
                      >
                        {option.icon}
                        <ResText
                          fontSize={18}
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
          bottom={80}
          c="primary"
          iconSize={25}
          right={20}
        />
        <LanguageDropDown
          pos="absolute"
          bottom={80}
          left={20}
        />
        <Button
          w="90%"
          pos="absolute"
          bottom={30}
        >
          Sign out
        </Button>
      </Modal>

      {/* Create post Modal */}
      <Modal
        opened={openedModal === 'add'}
        onClose={closeModal}
        fullScreen
        padding={0}
        withCloseButton={false}
      >
        <Flex
          direction="column"
          h="100dvh"
        >
          {/* Header */}
          <Flex
            align="center"
            gap={16}
            px={16}
            h={56}
            style={{ borderBottom: '1px solid #e5e7eb' }}
          >
            <ActionIcon
              variant="subtle"
              color="darkText"
              size="lg"
              onClick={closeModal}
            >
              <MdArrowBack size={24} />
            </ActionIcon>
            <Text
              size="lg"
              fw={600}
            >
              Create Post
            </Text>
          </Flex>

          <Flex
            flex={1}
            p={16}
            align="center"
            justify="center"
          >
            <Text c="dimmed">Create post content goes here</Text>
          </Flex>
        </Flex>
      </Modal>
    </>
  )
}

export { Navbar }
