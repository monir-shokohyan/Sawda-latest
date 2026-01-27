import { Group, Menu, MenuProps } from '@mantine/core'

import { MdClose, MdOutlineManageSearch } from 'react-icons/md'
import { HoveredActionIcon } from '@shared/styles'
import { Responsive } from '@shared/hooks/responsive'
import { Filter } from './filter'
import { FilterButton } from './filterButton'
import { useDisclosure } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import { Paths } from '@shared/api/paths/paths'

interface FilterProps {
  iconSize?: 'xl' | 'md' | 'lg' | 'sm'
  arrowPosition?: MenuProps['position']
}

const MenuFilter = ({
  iconSize = 'xl',
  arrowPosition = 'bottom-start',
}: FilterProps) => {
  const { isMobile } = Responsive()
  const [opened, { toggle, close }] = useDisclosure(false)
  const navigate = useNavigate()

  return (
    <Menu
      shadow="md"
      width={isMobile ? '90%' : '81vw'}
      position={arrowPosition}
      withArrow
      opened={opened}
      onChange={toggle}
      closeOnItemClick={false}
      closeOnClickOutside={false}
      transitionProps={{ transition: 'fade-down', duration: 250 }}
    >
      <Menu.Target>
        <FilterButton
          iconSize={iconSize}
          handleClick={toggle}
        />
      </Menu.Target>

      <Menu.Dropdown
        px={10}
        py={20}
      >
        <Group
          justify="space-between"
          align="center"
          mb="md"
        >
          <Menu.Label>
            <MdOutlineManageSearch size={19} />
            <span>Filter</span>
          </Menu.Label>

          <HoveredActionIcon
            variant="subtle"
            color="gray"
            onClick={() => close()}
            aria-label="Close filter menu"
          >
            <MdClose size={18} />
          </HoveredActionIcon>
        </Group>
        <Filter />
      </Menu.Dropdown>
    </Menu>
  )
}

export { MenuFilter }
