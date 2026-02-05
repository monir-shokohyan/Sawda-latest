import { ButtonProps, Menu, ScrollArea, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { HoveredMenuItem, SButton } from '@shared/styles'
import { ExpandArrow } from '../expandArrow'
import { MenuWrapper } from '../Menu/MenuWrapper'
import { ReactNode } from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { TriggerButton } from '../buttons/triggerButton'
import { Paths } from '@shared/api/paths/paths'

export interface MenuOption {
  label: string
  icon?: ReactNode
  handleClick?: () => void
  disabled?: boolean
  color?: string
  path?: string
  image?: string
}

interface Props extends ButtonProps {
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
  leftSection,
  triggerButton = <FaEllipsisV size={16} />,
  ...props
}: Props) => {
  const [opened, { toggle }] = useDisclosure(false)
  const navigate = useNavigate()

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
                onClick={() => {
                  if (option.disabled) {
                    navigate(Paths.Register)
                    return
                  }
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
