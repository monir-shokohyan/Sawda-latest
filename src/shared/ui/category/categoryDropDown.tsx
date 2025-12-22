import { Button, Menu } from '@mantine/core'
import { MdOutlineApps, MdOutlineKeyboardArrowDown } from 'react-icons/md'

const CategoryDropDown = () => {
  return (
    <Menu
      shadow="md"
      width={200}
    >
      <Menu.Target>
        <Button
          variant="subtle"
          leftSection={<MdOutlineApps size={20} />}
          rightSection={<MdOutlineKeyboardArrowDown size={20} />}
          color="textPrimary"
          size="sm"
        >
          All Categories
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item color="textPrimary">Category 1</Menu.Item>
        <Menu.Item color="textPrimary">Category 2</Menu.Item>
        <Menu.Item color="textPrimary">Category 3</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export { CategoryDropDown }
