import { Button, Menu } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import { MdOutlineKeyboardArrowDown, MdOutlinePersonOutline } from 'react-icons/md'

const ProfileDrownDown = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
        <Menu shadow="sm" width={200}>
           <Menu.Target>
            <Button
               variant="subtle"
              leftSection={isMobile ? null : <MdOutlinePersonOutline size={20} />}
              rightSection={<MdOutlineKeyboardArrowDown size={20} />}
               color="textPrimary"
              size="sm"
             >
              {isMobile ? <MdOutlinePersonOutline size={20}/> : "User name"}
            </Button>
           </Menu.Target>
          <Menu.Dropdown>
             <Menu.Item color="textPrimary">Profile</Menu.Item>
             <Menu.Item color="textPrimary">Settings</Menu.Item>
             <Menu.Item color="textPrimary">Logout</Menu.Item>
          </Menu.Dropdown>
         </Menu>
  )
}

export  { ProfileDrownDown }
