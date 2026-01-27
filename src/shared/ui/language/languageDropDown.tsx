import { Button, ButtonProps, Menu, Text } from '@mantine/core'
import { LanguageContants } from './constant'
import { HoveredMenuItem } from '@shared/styles'
import { ExpandArrow } from '../expandArrow'
import { useDisclosure } from '@mantine/hooks'
import { MenuWrapper } from '../Menu/MenuWrapper'

const LanguageDropDown = (props: ButtonProps) => {
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <MenuWrapper
      toggle={toggle}
      position="top-end"
      width={120}
    >
      <Menu.Target {...props}>
        <Button
          variant="subtle"
          rightSection={
            <ExpandArrow
              size={20}
              isOpen={opened}
            />
          }
          c="darkText"
          size="sm"
          justify="flex-start"
          {...props}
          radius={5}
        >
          English
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {LanguageContants.map((option) => {
          return (
            <HoveredMenuItem
              key={option.label}
              c="darkText"
              leftSection={option.icon}
              className="menuHover"
            >
              <Text size="sm">{option.label}</Text>
            </HoveredMenuItem>
          )
        })}
      </Menu.Dropdown>
    </MenuWrapper>
  )
}

export { LanguageDropDown }
