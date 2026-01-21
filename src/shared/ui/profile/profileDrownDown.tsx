import { Button, Menu, Text } from '@mantine/core'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlinePersonOutline,
} from 'react-icons/md'
import { ProfileConstant } from './constant'
import { HoveredMenuItem } from '@shared/styles'
import { Responsive } from '@shared/hooks/responsive'

const ProfileDrownDown = () => {
  const { isMobile } = Responsive()

  return (
    <Menu
      shadow="sm"
      width={200}
      withArrow
      transitionProps={{ transition: 'fade-down', duration: 250 }}
      position='top-end'
    >
      <Menu.Target>
        <Button
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
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {ProfileConstant.map((option) => {
          return (
            <HoveredMenuItem
              key={option.label}
              c="textPrimary"
              leftSection={option.icon}
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
