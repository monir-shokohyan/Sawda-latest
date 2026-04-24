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
import { useLocation, useNavigate } from 'react-router-dom'

const ACTIVE_STYLE = {
  backgroundColor: 'var(--mantine-color-primary-light-hover)',
}

const MobileDownbar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isActive = (path: string) => pathname.startsWith(path)

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
      dir="ltr"
    >
      <SActionIcon
        variant="subtle"
        $isSubtle
        c="darkText"
        size="xl"
        style={pathname === Paths.Main ? ACTIVE_STYLE : undefined}
        onClick={() => navigate(Paths.Main)}
      >
        <MdHome size={24} />
      </SActionIcon>

      <SActionIcon
        variant="subtle"
        $isSubtle
        c="darkText"
        size="xl"
        style={isActive(Paths.Favorites) ? ACTIVE_STYLE : undefined}
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
        onClick={() => navigate(`${Paths.SecureMobileModel}add`)}
      >
        <MdAdd size={28} />
      </SActionIcon>

      <SActionIcon
        variant="subtle"
        c="darkText"
        size="xl"
        $isSubtle
        style={
          isActive(`${Paths.SecureMobileModel}message-list`)
            ? ACTIVE_STYLE
            : undefined
        }
        onClick={() => navigate(`${Paths.SecureMobileModel}message-list`)}
      >
        <MdOutlineMessage size={24} />
      </SActionIcon>

      <SActionIcon
        variant="subtle"
        c="darkText"
        $isSubtle
        size="xl"
        style={
          isActive(`${Paths.SecureMobileModel}profile`)
            ? ACTIVE_STYLE
            : undefined
        }
        onClick={() => navigate(`${Paths.SecureMobileModel}profile`)}
      >
        <MdPerson size={24} />
      </SActionIcon>
    </Flex>
  )
}

export { MobileDownbar }
