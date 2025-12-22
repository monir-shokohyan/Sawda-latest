import { Button, Menu } from '@mantine/core'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { LanguageContants } from './constant'

const LanguageDropDown = () => {
  return (
    <Menu
      shadow="sm"
      width={120}
      withArrow
      transitionProps={{ transition: 'fade-down', duration: 250 }}
    >
      <Menu.Target>
        <Button
          variant="subtle"
          rightSection={<MdOutlineKeyboardArrowDown size={20} />}
          color="textPrimary"
          size="sm"
          justify="flex-start"
        >
          English
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {LanguageContants.map((option) => {
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

export { LanguageDropDown }
