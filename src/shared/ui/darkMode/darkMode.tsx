import {
  ActionIcon,
  ActionIconProps,
  useMantineColorScheme,
} from '@mantine/core'
import { HoveredActionIcon } from '@shared/styles'
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
    <HoveredActionIcon
      variant="subtle"
      color="textPrimary"
      size="lg"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={() => toggleColorScheme()}
      radius={5}
      {...props}
    >
      {isDark ? (
        <MdOutlineLightMode size={iconSize} />
      ) : (
        <MdOutlineDarkMode size={iconSize} />
      )}
    </HoveredActionIcon>
  )
}
