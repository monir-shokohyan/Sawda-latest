import { Menu, Text } from '@mantine/core'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlinePersonOutline,
} from 'react-icons/md'
import { HoveredButton, HoveredMenuItem } from '@shared/styles'
import { Responsive } from '@shared/hooks/responsive'
import { useProfileDropDown } from './hook'
import { useNavigate } from 'react-router-dom'

const ProfileDrownDown = () => {
  const { isMobile } = Responsive()
  const { ProfileConstant } = useProfileDropDown({ id: 'monir' })
  const navigate = useNavigate()

  return (
    <Menu
      shadow="sm"
      width={200}
      withArrow
      transitionProps={{ transition: 'fade-down', duration: 250 }}
      position="top-end"
    >
      <Menu.Target>
        <HoveredButton
          variant="subtle"
          leftSection={isMobile ? null : <MdOutlinePersonOutline size={20} />}
          rightSection={<MdOutlineKeyboardArrowDown size={20} />}
          color="textPrimary"
          size="sm"
          p={0}
          styles={{
            section: {
              marginInline: isMobile ? '0px' : '8px',
            },
          }}
        >
          {isMobile ? <MdOutlinePersonOutline size={20} /> : 'User name'}
        </HoveredButton>
      </Menu.Target>
      <Menu.Dropdown>
        {ProfileConstant.map((option) => {
          return (
            <HoveredMenuItem
              key={option.label}
              c="textPrimary"
              leftSection={option.icon}
              onClick={() => {
                if (option.handleClick) {
                  option.handleClick()
                  return
                }
                navigate(option.path as string)
              }}
            >
              <Text size="sm">{option.label}</Text>
            </HoveredMenuItem>
          )
        })}
      </Menu.Dropdown>
    </Menu>
  )
}

export { ProfileDrownDown }
