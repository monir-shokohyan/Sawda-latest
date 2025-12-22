import { Button, Drawer, Flex, Stack } from '@mantine/core'
import { CategoryDropDown } from '@shared/ui/category'
import { DarkMode } from '@shared/ui/darkMode'
import { LanguageDropDown } from '@shared/ui/language'
import { MdOutlineFavoriteBorder, MdOutlineMessage, MdOutlineNotifications } from 'react-icons/md'
interface props {
    drawerOpened: boolean
    closeDrawer: () => void
}

const MobileNavbar = ({drawerOpened, closeDrawer}:props) => {
  return (
    <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title="Menu"
        padding="md"
        size="80%"
        styles={{
          content: {
            height: '100dvh',
            maxHeight: '100dvh',
          },
        }}
      >
        <Flex
          gap="sm"
          h="88dvh"
          justify="space-between"
          direction="column"
        >
          <Stack gap="sm">
            <CategoryDropDown closeDrawer={closeDrawer}/>

            <Button
              variant="subtle"
              leftSection={<MdOutlineFavoriteBorder size={20} />}
              color="textPrimary"
              fullWidth
              justify="flex-start"
            >
              Favorites
            </Button>

            <Button
              variant="subtle"
              leftSection={<MdOutlineNotifications size={20} />}
              color="textPrimary"
              fullWidth
              justify="flex-start"
            >
              Notifications
            </Button>

            <Button
              variant="subtle"
              leftSection={<MdOutlineMessage size={20} />}
              color="textPrimary"
              fullWidth
              justify="flex-start"
            >
              Messages
            </Button>

            <Button
              fullWidth
              style={{
                backgroundColor: '#3b82f6',
                borderRadius: 6,
              }}
            >
              Place an ad
            </Button>
          </Stack>
          <Flex justify="space-between">
            <LanguageDropDown />
            <DarkMode />
          </Flex>
        </Flex>
      </Drawer>
  )
}

export  { MobileNavbar }
