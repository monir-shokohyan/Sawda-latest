import { Button, Group } from '@mantine/core'
import { MdDelete, MdMarkEmailRead, MdMarkEmailUnread } from 'react-icons/md'
import { LeftButtonGroupProps } from '../../types'

const LeftButtonGroup = ({
  handleMarkAsRead,
  handleMarkAsUnread,
  handleDeleteSelected,
  handleDeselectAll,
}: LeftButtonGroupProps) => {
  return (
    <Group
      gap="xs"
      mb="sm"
    >
      <Button
        size="xs"
        variant="light"
        color="primary"
        onClick={handleMarkAsRead}
        leftSection={<MdMarkEmailRead size={14} />}
      >
        Read
      </Button>
      <Button
        size="xs"
        variant="light"
        color="gray"
        onClick={handleMarkAsUnread}
        leftSection={<MdMarkEmailUnread size={14} />}
      >
        Unread
      </Button>
      <Button
        size="xs"
        variant="light"
        color="red"
        onClick={handleDeleteSelected}
        leftSection={<MdDelete size={14} />}
      >
        Delete
      </Button>
      <Button
        size="xs"
        variant="subtle"
        onClick={handleDeselectAll}
      >
        Cancel
      </Button>
    </Group>
  )
}

export { LeftButtonGroup }
