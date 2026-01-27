import { Menu, MenuProps } from '@mantine/core'
import React from 'react'

interface Props {
  children: React.ReactNode
  toggle: () => void
  position: MenuProps['position']
  width?: number | string
}

const MenuWrapper = ({children, toggle, position = 'top-end', width}: Props) => {
  return (
     <Menu
         shadow="sm"
         width={width}
         withArrow
         transitionProps={{ transition: 'fade-down', duration: 250 }}
         position={position}
         trigger="hover"
         onOpen={toggle}
         onClose={toggle}
       >
        {children}
        </Menu>
  )
}

export  { MenuWrapper }
