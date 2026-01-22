import { Button, Menu, Text } from '@mantine/core'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { LanguageContants } from './constant'
import { HoveredMenuItem } from '@shared/styles'

const LanguageDropDown = () => {
  return (
    <Menu
      shadow="sm"
      width={120}
      withArrow
      transitionProps={{ transition: 'fade-down', duration: 250 }}
      position="top-end"
    >
      <Menu.Target>
        <Button
          variant="subtle"
          rightSection={<MdOutlineKeyboardArrowDown size={20} />}
          c="darkText"
          size="sm"
          justify="flex-start"
        >
          English
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {LanguageContants.map((option) => {
          return (
            <HoveredMenuItem
              key={option.label}
              c="darkText"
              leftSection={option.icon}
              className="menuHover"
            >
              <Text size="sm">{option.label}</Text>
            </HoveredMenuItem>
          )
        })}
      </Menu.Dropdown>
    </Menu>
  )
}

export { LanguageDropDown }
