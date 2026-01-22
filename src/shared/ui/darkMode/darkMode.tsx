import {
  ActionIcon,
  ActionIconProps,
  useMantineColorScheme,
} from '@mantine/core'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

interface PropsType {
  iconSize?: number
}

export const DarkMode = ({
  iconSize = 20,
  ...props
}: PropsType & ActionIconProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const isDark = colorScheme === 'dark'

  return (
    <ActionIcon
      variant="subtle"
      color="textPrimary"
      size="lg"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={() => toggleColorScheme()}
      {...props}
    >
      {isDark ? (
        <MdOutlineLightMode size={iconSize} />
      ) : (
        <MdOutlineDarkMode size={iconSize} />
      )}
    </ActionIcon>
  )
}
