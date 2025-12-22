import { Button, Menu } from '@mantine/core'
import {
  MdKeyboardArrowRight,
  MdOutlineApps,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md'
import { CategoryConstants } from './constant'

const CategoryDropDown = () => {
  return (
    <Menu
      shadow="sm"
      withArrow
      transitionProps={{ transition: 'fade-down', duration: 250 }}
    >
      <Menu.Target>
        <Button
          variant="subtle"
          leftSection={<MdOutlineApps size={20} />}
          rightSection={<MdOutlineKeyboardArrowDown size={20} />}
          color="textPrimary"
          size="sm"
          justify="flex-start"
        >
          All Categories
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {CategoryConstants.map((option) => {
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
                rightSection={<MdKeyboardArrowRight />}
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

export { CategoryDropDown }
