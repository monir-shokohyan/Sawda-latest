import { ActionIcon, Menu } from '@mantine/core'
import {
  MdDelete,
  MdDeselect,
  MdMarkEmailRead,
  MdMarkEmailUnread,
  MdMoreVert,
  MdSelectAll,
} from 'react-icons/md'
import { LeftMenuProps } from '../../types'

const LeftMenu = ({
  setSelectionMode,
  handleSelectAll,
  handleDeselectAll,
  selectedCount,
  handleMarkAsRead,
  handleMarkAsUnread,
  handleDeleteSelected,
}: LeftMenuProps) => {
  return (
    <Menu
      shadow="md"
      width={200}
    >
      <Menu.Target>
        <ActionIcon
          variant="subtle"
          color="gray"
        >
          <MdMoreVert size={20} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<MdSelectAll size={16} />}
          onClick={() => {
            setSelectionMode(true)
            handleSelectAll()
          }}
        >
          Select All
        </Menu.Item>
        <Menu.Item
          leftSection={<MdDeselect size={16} />}
          onClick={handleDeselectAll}
          disabled={selectedCount === 0}
        >
          Deselect All
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          leftSection={<MdMarkEmailRead size={16} />}
          onClick={handleMarkAsRead}
          disabled={selectedCount === 0}
        >
          Mark as Read
        </Menu.Item>
        <Menu.Item
          leftSection={<MdMarkEmailUnread size={16} />}
          onClick={handleMarkAsUnread}
          disabled={selectedCount === 0}
        >
          Mark as Unread
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          leftSection={<MdDelete size={16} />}
          onClick={handleDeleteSelected}
          disabled={selectedCount === 0}
          color="red"
        >
          Delete Selected ({selectedCount})
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export { LeftMenu }
