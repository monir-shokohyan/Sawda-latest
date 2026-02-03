import { Menu, Text } from '@mantine/core'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { HoveredMenuItem, SButton } from '@shared/styles'
import { Responsive } from '@shared/hooks/responsive'
import { useProfileDropDown } from './hook'
import { useNavigate } from 'react-router-dom'
import { ExpandArrow } from '../expandArrow'
import { useDisclosure } from '@mantine/hooks'
import { MenuWrapper } from '../Menu/MenuWrapper'

const ProfileDrownDown = () => {
  const { isMobile } = Responsive()
  const { ProfileConstant } = useProfileDropDown({ id: 'monir' })
  const navigate = useNavigate()
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <MenuWrapper
      toggle={toggle}
      position="top-end"
      width={200}
    >
      <Menu.Target>
        <SButton
          variant="subtle"
          $isSubtle
          leftSection={isMobile ? null : <MdOutlinePersonOutline size={20} />}
          rightSection={
            <ExpandArrow
              size={20}
              isOpen={opened}
            />
          }
          color="textPrimary"
          size="sm"
          p={0}
          styles={{
            section: {
              marginInline: isMobile ? '0px' : '8px',
            },
          }}
        >
          {isMobile ? <MdOutlinePersonOutline size={20} /> : 'User name'}
        </SButton>
      </Menu.Target>
      <Menu.Dropdown>
        {ProfileConstant.map((option) => {
          return (
            <HoveredMenuItem
              key={option.label}
              c="textPrimary"
              leftSection={option.icon}
              onClick={() => {
                if (option.handleClick) {
                  option.handleClick()
                  return
                }
                navigate(option.path as string)
              }}
            >
              <Text size="sm">{option.label}</Text>
            </HoveredMenuItem>
          )
        })}
      </Menu.Dropdown>
    </MenuWrapper>
  )
}

export { ProfileDrownDown }
