import { Button, Menu } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlinePersonOutline,
} from 'react-icons/md'
import { ProfileConstant } from './constant'

const ProfileDrownDown = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <Menu
      shadow="sm"
      width={200}
      withArrow
      transitionProps={{ transition: 'fade-down', duration: 250 }}
    >
      <Menu.Target>
        <Button
          variant="subtle"
          leftSection={isMobile ? null : <MdOutlinePersonOutline size={20} />}
          rightSection={<MdOutlineKeyboardArrowDown size={20} />}
          color="textPrimary"
          size="sm"
          p={5}
          styles={{
            section: {
              marginInline: '0',
            },
          }}
        >
          {isMobile ? <MdOutlinePersonOutline size={20} /> : 'User name'}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {ProfileConstant.map((option) => {
          return (
            <Menu.Item
              color="textPrimary"
              py={0}
            >
              <Button
                variant="transparent"
                leftSection={option.icon}
                color="textPrimary"
                fullWidth
                justify="flex-start"
                p={0}
              >
                {option.label}
              </Button>
            </Menu.Item>
          )
        })}
      </Menu.Dropdown>
    </Menu>
  )
}

export { ProfileDrownDown }
