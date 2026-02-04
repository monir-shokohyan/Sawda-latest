import { ProfileSection } from '@features/product-card/ui/profileSection'
import { SettingList } from '@features/setting/setting-layout/ui/settingList'
import { Button, Collapse, Flex, ScrollArea } from '@mantine/core'
import { Paths } from '@shared/api/paths/paths'
import { DarkMode } from '@shared/ui/darkMode'
import { LanguageDropDown } from '@shared/ui/language'
import { Logo } from '@shared/ui/logo'
import { MenuItem } from '@shared/ui/Menu'
import { OverlayBg } from '@shared/ui/overlayBg'
import { useProfileDropDown } from '@shared/ui/profile/hook'
import { useNavigate } from 'react-router-dom'
import { SettingDropDownSelector } from '../reducers'
import { useAppSelector } from '@shared/hooks/redux-hooks'
import { HModal } from '@shared/styles'
import { BaseModal } from '@shared/ui/modal'

const ProfileModel = () => {
  const navigate = useNavigate()
  const { ProfileConstant, pathname } = useProfileDropDown({})
  const settingDropDown = useAppSelector(SettingDropDownSelector)

  return (
      <BaseModal
      opened={pathname.endsWith('profile')}
      onClose={() => navigate(Paths.Main)}
      fullScreen
      pos="relative"
      >
      {/* Content */}
      <ScrollArea
        h="74dvh"
        scrollbars="y"
        scrollbarSize={4}
      >
        <Flex
          direction="column"
          w="100%"
          gap={10}
        >
          <OverlayBg>
            <ProfileSection
              profile={{
                username: 'Monir198323',
                timestamp: '23day',
                email: 'monir.shekoyans1@gmail.com',
              }}
              hoverUsername={false}
              showEmail
              showTime={false}
              usernameSizeMobile="1.2rem"
              timeSize="0.9rem"
              mobileSize="90px"
              direction="column"
              isStaticColor
            />
          </OverlayBg>
          {ProfileConstant.map((option) => {
            if (option.label.toLocaleLowerCase() !== 'logout') {
              return (
                <MenuItem
                  option={option}
                  key={option.label}
                />
              )
            }
          })}
          <Collapse
            in={settingDropDown}
            pl={20}
            transitionDuration={200}
            transitionTimingFunction="linear"
          >
            <SettingList />
          </Collapse>
        </Flex>
      </ScrollArea>
      <DarkMode
        pos="absolute"
        bottom={80}
        c="primary"
        iconSize={25}
        right={20}
        radius={5}
      />
      <LanguageDropDown
        pos="absolute"
        bottom={80}
        left={10}
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
      </BaseModal>
  )
}

export { ProfileModel }
