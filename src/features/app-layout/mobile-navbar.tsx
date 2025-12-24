import { ActionIcon, Flex } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

import {
  MdAdd,
  MdHome,
  MdOutlineFavoriteBorder,
  MdOutlineMessage,
  MdPerson,
} from 'react-icons/md'

type ModalType = 'add' | 'message' | 'profile' | null

interface MobileDownbarProps {
  setOpenedModal: Dispatch<SetStateAction<ModalType>>
}

const MobileDownbar = ({ setOpenedModal }: MobileDownbarProps) => {
  return (
    <Flex
      justify="space-around"
      align="center"
      h={60}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: '1px solid #e5e7eb',
        backgroundColor: 'var(--mantine-color-body)',
        zIndex: 100,
      }}
    >
      <ActionIcon
        variant="subtle"
        color="gray"
        size="xl"
      >
        <MdHome size={24} />
      </ActionIcon>

      <ActionIcon
        variant="subtle"
        color="gray"
        size="xl"
      >
        <MdOutlineFavoriteBorder size={24} />
      </ActionIcon>

      <ActionIcon
        variant="filled"
        color="blue"
        size="xl"
        radius="xl"
        style={{
          width: 48,
          height: 48,
        }}
        onClick={() => setOpenedModal('add')}
      >
        <MdAdd size={28} />
      </ActionIcon>

      <ActionIcon
        variant="subtle"
        color="gray"
        size="xl"
        onClick={() => setOpenedModal('message')}
      >
        <MdOutlineMessage size={24} />
      </ActionIcon>

      <ActionIcon
        variant="subtle"
        color="gray"
        size="xl"
        onClick={() => setOpenedModal('profile')}
      >
        <MdPerson size={24} />
      </ActionIcon>
    </Flex>
  )
}

export { MobileDownbar }
