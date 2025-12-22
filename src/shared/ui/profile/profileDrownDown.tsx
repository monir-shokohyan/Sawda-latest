import { Button, Menu } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineLogout,
  MdOutlinePersonOutline,
  MdOutlineSettings,
} from 'react-icons/md'
import { ProfileConstant } from './constant'

const ProfileDrownDown = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <Menu
      shadow="sm"
      width={200}
    >
      <Menu.Target>
        <Button
          variant="subtle"
          leftSection={isMobile ? null : <MdOutlinePersonOutline size={20} />}
          rightSection={<MdOutlineKeyboardArrowDown size={20} />}
          color="textPrimary"
          size="sm"
        >
          {isMobile ? <MdOutlinePersonOutline size={20} /> : 'User name'}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {ProfileConstant.map((option) => {
          return (
            <Menu.Item color="textPrimary"  py={0}>   
              <Button
                  variant="transparent"
                  leftSection={option.icon}
                  color="textPrimary"
                  fullWidth
                  justify="flex-start"
                  p={0}
                >
                  {option.label}</Button>
           </Menu.Item>
          )
        })}
      </Menu.Dropdown>
    </Menu>
  )
}

export { ProfileDrownDown }
