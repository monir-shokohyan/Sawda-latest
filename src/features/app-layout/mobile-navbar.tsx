import { Flex } from '@mantine/core'
import { Paths } from '@shared/api/paths/paths'
import { SActionIcon } from '@shared/styles'

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
      <SActionIcon
        variant="subtle"
        $isSubtle
        c="darkText"
        size="xl"
        onClick={() => navigate(Paths.Main)}
      >
        <MdHome size={24} />
      </SActionIcon>

      <SActionIcon
        variant="subtle"
        $isSubtle
        c="darkText"
        size="xl"
        onClick={() => navigate(`${Paths.Favorites}monir`)}
      >
        <MdOutlineFavoriteBorder size={24} />
      </SActionIcon>

      <SActionIcon
        variant="filled"
        color="blue"
        size="xl"
        style={{
          width: 48,
          height: 48,
        }}
        onClick={() => navigate(Paths.AddProductMobile)}
      >
        <MdAdd size={28} />
      </SActionIcon>

      <SActionIcon
        variant="subtle"
        c="darkText"
        size="xl"
        $isSubtle
        onClick={() => navigate(`${Paths.MobileModel}message-list`)}
      >
        <MdOutlineMessage size={24} />
      </SActionIcon>

      <SActionIcon
        variant="subtle"
        c="darkText"
        $isSubtle
        size="xl"
        onClick={() => navigate(`${Paths.MobileModel}profile`)}
      >
        <MdPerson size={24} />
      </SActionIcon>
    </Flex>
  )
}

export { MobileDownbar }
