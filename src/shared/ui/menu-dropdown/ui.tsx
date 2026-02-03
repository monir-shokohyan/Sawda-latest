import { ActionIcon, Menu, ScrollArea, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { HoveredMenuItem, SActionIcon, SButton } from '@shared/styles'
import { Responsive } from '@shared/hooks/responsive'
import { ExpandArrow } from '../expandArrow'
import { MenuWrapper } from '../Menu/MenuWrapper'
import { ReactNode } from 'react'
import { FaEllipsisV } from 'react-icons/fa'

interface MenuOption {
  label: string
  icon?: ReactNode
  handleClick?: () => void
  disabled?: boolean
  color?: string
}

interface Props {
  options: MenuOption[]
  showExpandArrow?: boolean
  position?: 'top-end' | 'top-start' | 'bottom-end' | 'bottom-start' | 'top' | 'bottom' | 'left' | 'right'
  width?: number
  variant?: 'subtle' | 'filled' | 'outline' | 'default'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  mobileIconOnly?: boolean
  leftSection?: ReactNode
  triggerButton?: ReactNode
}
const Trigger = () => {
    return (
           <ActionIcon
              variant="transparent"
              color="gray"
            >
              <FaEllipsisV size={16} />
            </ActionIcon>
    )
}
const Ui = ({
  options,
  showExpandArrow = true,
  position = 'bottom-end',
  width = 200,
  variant = 'subtle',
  size = 'sm',
  color = 'textPrimary',
  mobileIconOnly = true,
  leftSection,
  triggerButton = <Trigger />,
}: Props) => {
  const { isMobile } = Responsive()
  const [opened, { toggle }] = useDisclosure(false)

  const showIconOnlyOnMobile = mobileIconOnly && isMobile

  return (
      <div onClick={(e) => e.stopPropagation()}>     
        <MenuWrapper
          toggle={toggle}
          position={position}
          width={width}
        >
          <Menu.Target>
            <SButton
              variant={variant}
              $isSubtle={variant === 'subtle'}
              leftSection={leftSection}
              rightSection={
                showExpandArrow ? (
                  <ExpandArrow
                    size={20}
                    isOpen={opened}
                  />
                ) : null
              }
              color={color}
              size={size}
              p={0}
              styles={{
                section: {
                  marginInline: showIconOnlyOnMobile ? '0px' : '8px',
                },
              }}
            >
              {triggerButton}
            </SButton>
          </Menu.Target>
          
          <Menu.Dropdown>
                      <ScrollArea type="auto">
            
            {options.map((option, index) => (
              <HoveredMenuItem
                key={`${option.label}-${index}`}
                c={option.color || 'textPrimary'}
                leftSection={option.icon}
                disabled={option.disabled}
                onClick={() => {
                  if (option.handleClick && !option.disabled) {
                    option.handleClick()
                  }
                }}
              >
                {option.label && <Text size="sm">{option.label}</Text>}
              </HoveredMenuItem>
            ))}
            </ScrollArea>
          </Menu.Dropdown>
        </MenuWrapper>
      </div>
  )
}

export { Ui }