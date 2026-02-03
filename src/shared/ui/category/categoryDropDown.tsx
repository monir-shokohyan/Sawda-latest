import { Menu, Stack, Text, ScrollArea } from '@mantine/core'
import { MdOutlineApps } from 'react-icons/md'
import { CategoryConstants } from './constant'
import { HoveredMenuItem, SButton } from '@shared/styles'
import { Responsive } from '@shared/hooks/responsive'
import { Paths } from '@shared/api/paths/paths'
import { useNavigate } from 'react-router-dom'
import { ExpandArrow } from '../expandArrow'
import { useDisclosure } from '@mantine/hooks'
import { MenuWrapper } from '../Menu/MenuWrapper'
import { MenuDropDown } from '../menu-dropdown'

const CategoryDropDown = ({ closeDrawer }: { closeDrawer?: () => void }) => {
  const navigate = useNavigate()
  const [opened, { toggle }] = useDisclosure(false)

  const selectCategory = (id: number) => {
    navigate(`${Paths.Search}monir?category=${id}`)
    closeDrawer?.()
  }

  const { isMobile } = Responsive()

  const triggerButton = (
    <SButton
      variant="subtle"
      leftSection={<MdOutlineApps size={20} />}
      $isSubtle={true}
      rightSection={
        <ExpandArrow
          size={20}
          isOpen={opened}
        />
      }
      color="textPrimary"
      size="sm"
      fullWidth={isMobile}
      justify="flex-start"
    >
      All Categories
    </SButton>
  )

  return (
    <>

      <MenuWrapper
        toggle={toggle}
        position="bottom-end"
      >
        <Menu.Target>{triggerButton}</Menu.Target>

        <Menu.Dropdown>
          <ScrollArea type="auto">
            <Stack
              gap={0}
              bg="background.7"
            >
              {CategoryConstants.map((option) => (
                <HoveredMenuItem
                  key={option.id}
                  c="textPrimary"
                  leftSection={option.icon}
                  onClick={() => selectCategory(option.id)}
                >
                  <Text size="sm">{option.label}</Text>
                </HoveredMenuItem>
              ))}
            </Stack>
          </ScrollArea>
        </Menu.Dropdown>
      </MenuWrapper>
    </>
  )
}

export { CategoryDropDown }
