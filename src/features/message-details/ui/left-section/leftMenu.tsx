import { ActionIcon, Menu, Text } from '@mantine/core'
import {
  MdDelete,
  MdDeselect,
  MdMarkEmailRead,
  MdMarkEmailUnread,
  MdMoreVert,
  MdSelectAll,
} from 'react-icons/md'
import { HoveredMenuItem } from '@shared/styles'
import { MenuOption } from '@shared/ui/menu-dropdown/ui'
import { MenuDropDown } from '@shared/ui/menu-dropdown'

const LeftMenu = ( {constant}: {constant: MenuOption[]} ) => {
  return (
         <MenuDropDown
        options={constant}
        showExpandArrow={false}
        triggerButton={
          <MdMoreVert size={20} />  
        }
        width={200}
        position="bottom"
      />
  )
}

export { LeftMenu }
