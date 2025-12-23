import { Button, Menu, Stack, Text, ScrollArea } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { MdOutlineApps, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { CategoryConstants } from './constant'

const CategoryDropDown = ({ closeDrawer }: { closeDrawer?: () => void }) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

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
          h={500}
          type="auto"
        >
          <Stack gap={0}>
            {CategoryConstants.map((option) => (
              <Menu.Item
                key={option.label}
                c="textPrimary"
                leftSection={option.icon}
                onClick={() => closeDrawer?.()}
              >
                <Text size="sm">{option.label}</Text>
              </Menu.Item>
            ))}
          </Stack>
        </ScrollArea>
      </Menu.Dropdown>
    </Menu>
  )
}

export { CategoryDropDown }
