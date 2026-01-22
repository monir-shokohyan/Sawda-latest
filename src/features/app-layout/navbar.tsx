import { Flex, ActionIcon, Image, Modal, Text, useMantineTheme } from '@mantine/core'
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
import { HoveredItem, HoveredMenuItem, SButton } from '@shared/styles'
import { Responsive } from '@shared/hooks/responsive'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useLocation, useNavigate } from 'react-router-dom'

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
                  color="textPrimary"
                  size="lg"
                >
                  <MdOutlineFavoriteBorder size={20} />
                </ActionIcon>

                <ActionIcon
                  variant="subtle"
                  color="textPrimary"
                  size="lg"
                >
                  <MdOutlineShoppingCart size={20} />
                </ActionIcon>

                <ActionIcon
                  variant="subtle"
                  color="textPrimary"
                  size="lg"
                >
                  <MdOutlineNotifications size={20} />
                </ActionIcon>

                <ActionIcon
                  variant="subtle"
                  color="textPrimary"
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
          h="100vh"
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
        padding={0}
        withCloseButton={false}
      >
        <Flex
          direction="column"
          h="100vh"
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
              Profile
            </Text>
          </Flex>

          {/* Content */}
          <Flex
            flex={1}
            p={16}
            align="center"
            justify="space-between"
            direction="column"
          >
            <Flex direction="column" w="100%" gap={10}>
               {ProfileConstant.map((option) => (
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
                    <Flex gap={20}>
                    {option.icon}
                    {option.label}
                    </Flex>
                  </HoveredItem>
                ))}
            </Flex>
            <Flex justify="flex-start" w="100%">
              <LanguageDropDown />
            </Flex>
          </Flex>
        </Flex>
      </Modal>

      <Modal
        opened={openedModal === 'add'}
        onClose={closeModal}
        fullScreen
        padding={0}
        withCloseButton={false}
      >
        <Flex
          direction="column"
          h="100vh"
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
