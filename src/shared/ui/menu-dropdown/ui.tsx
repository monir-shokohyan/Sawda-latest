import { ActionIcon, ButtonProps, Menu, ScrollArea, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { HoveredMenuItem, SButton } from '@shared/styles'
import { Responsive } from '@shared/hooks/responsive'
import { ExpandArrow } from '../expandArrow'
import { MenuWrapper } from '../Menu/MenuWrapper'
import { ReactNode } from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { TriggerButton } from '../buttons/triggerButton'

export interface MenuOption {
  label: string
  icon?: ReactNode
  handleClick?: () => void
  disabled?: boolean
  color?: string
  path?: string
  image?: string
}

interface Props {
  options: MenuOption[]
  showExpandArrow?: boolean
  position?:
    | 'top-end'
    | 'top-start'
    | 'bottom-end'
    | 'bottom-start'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
  width?: number | 'target'
  variant?: 'subtle' | 'filled' | 'outline' | 'default'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  mobileIconOnly?: boolean
  leftSection?: ReactNode
  triggerButton?: ReactNode
  props?: ButtonProps
}

const Ui = ({
  options,
  showExpandArrow = true,
  position = 'bottom-end',
  width = 'target',
  variant = 'subtle',
  size = 'sm',
  color = 'textPrimary',
  mobileIconOnly = true,
  leftSection,
  triggerButton = <TriggerButton content={<FaEllipsisV size={16} />} />,
  props,
}: Props) => {
  const { isMobile } = Responsive()
  const [opened, { toggle }] = useDisclosure(false)
  const navigate = useNavigate()
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
            px={8}
            {...props}
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
                  if (option.disabled) return
                  if (option.handleClick) {
                    option.handleClick()
                    return
                  }
                  navigate(option.path as string)
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
