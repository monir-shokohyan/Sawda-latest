import { Group, Menu, MenuProps } from '@mantine/core'

import { MdClose, MdOutlineManageSearch } from 'react-icons/md'
import { SActionIcon } from '@shared/styles'
import { Responsive } from '@shared/hooks/responsive'
import { FilterButton } from './filterButton'
import { useDisclosure } from '@mantine/hooks'
import { FilterForm } from '@entities/filter-form'

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
        p={0}
      >
        <Group
          justify="space-between"
          align="center"
          p="sm"
        >
          <Menu.Label >
            <Group align='center'>
            <MdOutlineManageSearch size={19} />
            <span>Filter</span>
            </Group>
          </Menu.Label>

          <SActionIcon
            variant="subtle"
            $isSubtle
            color="gray"
            onClick={() => close()}
            aria-label="Close filter menu"
          >
            <MdClose size={18} />
          </SActionIcon>
        </Group>
        <FilterForm />
      </Menu.Dropdown>
    </Menu>
  )
}

export { MenuFilter }
