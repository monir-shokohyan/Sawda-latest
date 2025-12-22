import { Button, Menu } from '@mantine/core'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const LanguageDropDown = () => {
  return (
    <Menu
      shadow="md"
      width={120}
    >
      <Menu.Target>
        <Button
          variant="subtle"
          rightSection={<MdOutlineKeyboardArrowDown size={20} />}
          color="textPrimary"
          size="sm"
        >
          English
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item color="textPrimary">English</Menu.Item>
        <Menu.Item color="textPrimary">Dari</Menu.Item>
        <Menu.Item color="textPrimary">Pashto</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export { LanguageDropDown }
