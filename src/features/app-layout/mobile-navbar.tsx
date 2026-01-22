import { ActionIcon, Flex } from '@mantine/core'
import { HoveredActionIcon } from '@shared/styles'
import { Dispatch, SetStateAction } from 'react'

import {
  MdAdd,
  MdHome,
  MdOutlineFavoriteBorder,
  MdOutlineMessage,
  MdPerson,
} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

type ModalType = 'add' | 'message' | 'profile' | null

interface MobileDownbarProps {
  setOpenedModal: Dispatch<SetStateAction<ModalType>>
}

const MobileDownbar = ({ setOpenedModal }: MobileDownbarProps) => {
  const navigate = useNavigate()
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
        backgroundColor: 'var(--mantine-color-background-8)',
        zIndex: 100,
      }}
    >
      <HoveredActionIcon
        variant="subtle"
        c="darkText"
        size="xl"
        onClick={() => navigate('/')}
      >
        <MdHome size={24} />
      </HoveredActionIcon>

      <HoveredActionIcon
        variant="subtle"
        c="darkText"
        size="xl"
      >
        <MdOutlineFavoriteBorder size={24} />
      </HoveredActionIcon>

      <HoveredActionIcon
        variant="filled"
        color="blue"
        size="xl"
        style={{
          width: 48,
          height: 48,
        }}
        onClick={() => setOpenedModal('add')}
      >
        <MdAdd size={28} />
      </HoveredActionIcon>

      <HoveredActionIcon
        variant="subtle"
        c="darkText"
        size="xl"
        onClick={() => setOpenedModal('message')}
      >
        <MdOutlineMessage size={24} />
      </HoveredActionIcon>

      <HoveredActionIcon
        variant="subtle"
        c="darkText"
        size="xl"
        onClick={() => setOpenedModal('profile')}
      >
        <MdPerson size={24} />
      </HoveredActionIcon>
    </Flex>
  )
}

export { MobileDownbar }
