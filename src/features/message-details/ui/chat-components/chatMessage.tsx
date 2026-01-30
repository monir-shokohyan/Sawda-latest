import { Text } from '@mantine/core'

const ChatMessage = ({ content }: { content: string }) => {
  return (
    <Text
      size="sm"
      style={{
        lineHeight: 1.4,
        wordBreak: 'break-word',
      }}
    >
      {content}
    </Text>
  )
}

export { ChatMessage }
