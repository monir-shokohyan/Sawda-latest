import {
  Flex,
  Menu,
  ActionIcon,
  Button,
  Image,
  Burger,
  Drawer,
  Stack,
  TextInput,
  useMantineColorScheme,
} from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux-hooks'
import { NavbarSelector } from '@shared/reducers'
import { CategoryDropDown } from '@shared/ui/category/categoryDropDown'
import { LanguageDropDown } from '@shared/ui/language/languageDropDown'
import { ProfileDrownDown } from '@shared/ui/profile/profileDrownDown'
import {
  MdOutlineFavoriteBorder,
  MdOutlineMessage,
  MdOutlineNotifications,
  MdOutlineShoppingCart,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from 'react-icons/md'

const Navbar = () => {
  const data = useAppSelector(NavbarSelector)
  const dispatch = useAppDispatch()
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)

  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1024px)')
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <>
      <Flex
        px={isMobile ? 16 : isTablet ? 40 : 100}
        justify="space-between"
        h={53}
        align="center"
        style={{ borderBottom: '1px solid #e5e7eb' }}
      >
        {isMobile && (
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            size="sm"
          />
        )}

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
          gap={isMobile ? 8 : 16}
        >
          {!isMobile && (
            <>
              {!isTablet && <LanguageDropDown />}
              <Flex>
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

                {!isTablet && (
                  <>
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

                    <ActionIcon
                      variant="subtle"
                      color="textPrimary"
                      size="lg"
                      onClick={() => toggleColorScheme()}
                    >
                      {colorScheme === 'dark' ? (
                        <MdOutlineDarkMode size={20} />
                      ) : (
                        <MdOutlineLightMode size={20} />
                      )}
                    </ActionIcon>
                  </>
                )}
              </Flex>
              <ProfileDrownDown />

              <Button
                size="compact-sm"
                style={{
                  backgroundColor: '#3b82f6',
                  borderRadius: 6,
                }}
              >
                Place an ad
              </Button>
            </>
          )}

          {isMobile && (
            <>
              <ActionIcon
                variant="subtle"
                color="textPrimary"
                size="lg"
              >
                <MdOutlineShoppingCart size={20} />
              </ActionIcon>
              <ProfileDrownDown />
            </>
          )}
        </Flex>
      </Flex>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title="Menu"
        padding="md"
        size="80%"
      >
        <Stack gap="sm">
          <CategoryDropDown />
          <LanguageDropDown />

          <Button
            variant="subtle"
            leftSection={<MdOutlineFavoriteBorder size={18} />}
            color="gray"
            fullWidth
            justify="flex-start"
          >
            Favorites
          </Button>

          <Button
            variant="subtle"
            leftSection={<MdOutlineNotifications size={18} />}
            color="gray"
            fullWidth
            justify="flex-start"
          >
            Notifications
          </Button>

          <Button
            variant="subtle"
            leftSection={<MdOutlineMessage size={18} />}
            color="gray"
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
      </Drawer>
    </>
  )
}

export { Navbar }
