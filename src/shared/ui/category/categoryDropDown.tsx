import { Button, Menu, Stack, Text, ScrollArea } from '@mantine/core'
import { MdOutlineApps, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { CategoryConstants } from './constant'
import { HoveredMenuItem } from '@shared/styles'
import { Responsive } from '@shared/hooks/responsive'

const CategoryDropDown = ({ closeDrawer }: { closeDrawer?: () => void }) => {
  const { isMobile } = Responsive()

  const triggerButton = (
    <Button
      variant="subtle"
      leftSection={<MdOutlineApps size={20} />}
      rightSection={<MdOutlineKeyboardArrowDown size={20} />}
      color="textPrimary"
      size="sm"
      fullWidth={isMobile}
      justify="flex-start"
    >
      All Categories
    </Button>
  )

  return (
    <Menu
      shadow="md"
      position="bottom-start"
      withArrow
    >
      <Menu.Target>{triggerButton}</Menu.Target>

      <Menu.Dropdown>
        <ScrollArea
          h={520}
          type="auto"
        >
          <Stack
            gap={0}
            bg="background.7"
          >
            {CategoryConstants.map((option) => (
              <HoveredMenuItem
                key={option.label}
                c="textPrimary"
                leftSection={option.icon}
                onClick={() => closeDrawer?.()}
              >
                <Text size="sm">{option.label}</Text>
              </HoveredMenuItem>
            ))}
          </Stack>
        </ScrollArea>
      </Menu.Dropdown>
    </Menu>
  )
}

export { CategoryDropDown }
