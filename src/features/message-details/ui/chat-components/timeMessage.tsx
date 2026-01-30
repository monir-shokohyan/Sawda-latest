import { Text } from '@mantine/core'

const TimeMessage = ({ timestamp }: { timestamp: string }) => {
  return (
    <Text
      size="xs"
      c="dimmed"
      px={4}
    >
      {timestamp}
    </Text>
  )
}

export { TimeMessage }
