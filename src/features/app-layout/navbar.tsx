import { Flex, ActionIcon, Button, Image, Burger } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { CategoryDropDown } from '@shared/ui/category/categoryDropDown'
import { DarkMode } from '@shared/ui/darkMode/darkMode'
import { LanguageDropDown } from '@shared/ui/language/languageDropDown'
import { ProfileDrownDown } from '@shared/ui/profile/profileDrownDown'
import {
  MdOutlineFavoriteBorder,
  MdOutlineMessage,
  MdOutlineNotifications,
  MdOutlineShoppingCart,
} from 'react-icons/md'
import { MobileNavbar } from './mobile-navbar'

const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)

  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1024px)')

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
            lineSize={2}
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

                    <DarkMode />
                  </>
                )}
              </Flex>
              <ProfileDrownDown />

              <Button
                size="compact-sm"
                style={{
                  borderRadius: 6,
                }}
                bg="primary"
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

      <MobileNavbar
        drawerOpened={drawerOpened}
        closeDrawer={closeDrawer}
      />
    </>
  )
}

export { Navbar }
