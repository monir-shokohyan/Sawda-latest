import { Menu, MenuProps } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import React from 'react'

interface Props {
  children: React.ReactNode
  toggle: () => void
  position: MenuProps['position']
  width?: number | string
  clickTrigger?: boolean
}

const MenuWrapper = ({
  children,
  toggle,
  position = 'top-end',
  width,
  clickTrigger = false,
}: Props) => {
  const { isMobile } = Responsive()
  return (
    <Menu
      shadow="sm"
      width={width}
      withArrow
      transitionProps={{ transition: 'fade-down', duration: 250 }}
      position={position}
      trigger={isMobile || clickTrigger ? 'click' : 'hover'}
      onOpen={toggle}
      onClose={toggle}
    >
      {children}
    </Menu>
  )
}

export { MenuWrapper }
