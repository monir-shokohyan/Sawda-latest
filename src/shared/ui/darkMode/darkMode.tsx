import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

const DarkMode = () => {
      const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <ActionIcon
           variant="subtle"
           color="textPrimary"
           size="lg"
           onClick={() => toggleColorScheme()}
         >
           {colorScheme === 'dark' ? (
             <MdOutlineDarkMode size={20} />
           ) : (
             <MdOutlineLightMode size={20} />
           )}
    </ActionIcon>
  )
}

export  { DarkMode }
