import { Flex } from '@mantine/core'
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
import { MobileDownbar } from './mobile-navbar'
import { HoveredActionIcon, SButton } from '@shared/styles'
import { Responsive } from '@shared/hooks/responsive'
import { Logo } from '@shared/ui/logo'
import { useNavigate } from 'react-router-dom'
import { Paths } from '@shared/api/paths/paths'

const Navbar = () => {
  const { isMobile, isTablet } = Responsive()
  const navigate = useNavigate()

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
                <HoveredActionIcon
                  variant="subtle"
                  color="darkText"
                  size="lg"
                  onClick={() => navigate(`${Paths.Favorites}monir`)}
                >
                  <MdOutlineFavoriteBorder size={20} />
                </HoveredActionIcon>

                <HoveredActionIcon
                  variant="subtle"
                  color="darkText"
                  size="lg"
                >
                  <MdOutlineShoppingCart size={20} />
                </HoveredActionIcon>

                <HoveredActionIcon
                  variant="subtle"
                  color="darkText"
                  size="lg"
                >
                  <MdOutlineNotifications size={20} />
                </HoveredActionIcon>

                <HoveredActionIcon
                  variant="subtle"
                  color="darkText"
                  size="lg"
                  onClick={() => navigate(`${Paths.Message}monir`)}
                >
                  <MdOutlineMessage size={20} />
                </HoveredActionIcon>
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

      {isMobile && <MobileDownbar />}
    </>
  )
}

export { Navbar }
