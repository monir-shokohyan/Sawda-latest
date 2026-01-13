import { Flex, ActionIcon, Button, Image, Modal, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { CategoryDropDown } from '@shared/ui/category/categoryDropDown'
import { DarkMode } from '@shared/ui/darkMode/darkMode'
import { LanguageDropDown } from '@shared/ui/language/languageDropDown'
import { ProfileDrownDown } from '@shared/ui/profile/profileDrownDown'
import {
  MdOutlineFavoriteBorder,
  MdOutlineMessage,
  MdOutlineNotifications,
  MdOutlineShoppingCart,
  MdHome,
  MdAdd,
  MdPerson,
  MdArrowBack,
} from 'react-icons/md'
import { useState } from 'react'
import { MobileDownbar } from './mobile-navbar'

const Navbar = () => {
  const [openedModal, setOpenedModal] = useState<
    'message' | 'profile' | 'add' | null
  >(null)

  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1024px)')

  const closeModal = () => setOpenedModal(null)

  return (
    <>
      <Flex
        px={isMobile ? 16 : isTablet ? 40 : 100}
        justify="space-between"
        h={53}
        align="center"
        // style={{ borderBottom: '1px solid #e5e7eb' }}
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
            <Button
               variant="subtle"
               color="lightText"
               size="sm"
               p={0}
               px={10}
               styles={{
                 section: {
                   marginInline: isMobile ? '0px' : '8px',
                 },
               }}
               bg="originalBlue"
             >
               Place an ad
             </Button>
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
            justify="center"
          >
            <Text c="dimmed">Profile content goes here</Text>
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
