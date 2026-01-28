import { ActionIcon, Menu, Text } from '@mantine/core'
import {
  MdDelete,
  MdDeselect,
  MdMarkEmailRead,
  MdMarkEmailUnread,
  MdMoreVert,
  MdSelectAll,
} from 'react-icons/md'
import { LeftMenuProps } from '../../types'
import { HoveredMenuItem } from '@shared/styles'

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
        <HoveredMenuItem
          c="darkText"
          leftSection={<MdSelectAll size={16} />}
          onClick={() => {
            setSelectionMode(true)
            handleSelectAll()
          }}
          disabled={false}
        >
          <Text size="sm">Select All</Text>
        </HoveredMenuItem>
        <HoveredMenuItem
          c="darkText"
          leftSection={<MdDeselect size={16} />}
          onClick={handleDeselectAll}
          disabled={selectedCount === 0}
        >
          <Text size="sm">Deselect All</Text>
        </HoveredMenuItem>

        <Menu.Divider />
        <HoveredMenuItem
          c="darkText"
          leftSection={<MdMarkEmailRead size={16} />}
          onClick={handleMarkAsRead}
          disabled={selectedCount === 0}
        >
          <Text size="sm">Mark as Read</Text>
        </HoveredMenuItem>
        <HoveredMenuItem
          c="darkText"
          leftSection={<MdMarkEmailUnread size={16} />}
          onClick={handleMarkAsUnread}
          disabled={selectedCount === 0}
        >
          <Text size="sm">Mark as Unread</Text>
        </HoveredMenuItem>
        <Menu.Divider />
        <HoveredMenuItem
          leftSection={<MdDelete size={16} />}
          onClick={handleDeleteSelected}
          disabled={selectedCount === 0}
          color="red"
        >
          <Text size="sm">Delete Selected ({selectedCount})</Text>
        </HoveredMenuItem>
      </Menu.Dropdown>
    </Menu>
  )
}

export { LeftMenu }
