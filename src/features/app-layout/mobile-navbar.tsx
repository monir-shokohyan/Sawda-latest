import { Flex } from '@mantine/core'
import { Paths } from '@shared/api/paths/paths'
import { HoveredActionIcon } from '@shared/styles'

import {
  MdAdd,
  MdHome,
  MdOutlineFavoriteBorder,
  MdOutlineMessage,
  MdPerson,
} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const MobileDownbar = () => {
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
        onClick={() => navigate(Paths.Main)}
      >
        <MdHome size={24} />
      </HoveredActionIcon>

      <HoveredActionIcon
        variant="subtle"
        c="darkText"
        size="xl"
        onClick={() => navigate(`${Paths.Favorites}monir`)}
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
        onClick={() => navigate(`${Paths.MobileModel}add`)}
      >
        <MdAdd size={28} />
      </HoveredActionIcon>

      <HoveredActionIcon
        variant="subtle"
        c="darkText"
        size="xl"
        onClick={() => navigate(`${Paths.MobileModel}message`)}
      >
        <MdOutlineMessage size={24} />
      </HoveredActionIcon>

      <HoveredActionIcon
        variant="subtle"
        c="darkText"
        size="xl"
        onClick={() => navigate(`${Paths.MobileModel}profile`)}
      >
        <MdPerson size={24} />
      </HoveredActionIcon>
    </Flex>
  )
}

export { MobileDownbar }
