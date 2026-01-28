import { StickyPaper } from '@features/message-details/styles'
import { RightFooterProps } from '@features/message-details/types'
import { ActionIcon, Group, TextInput } from '@mantine/core'
import { MdSend } from 'react-icons/md'

const Footer = ({
  inputValue,
  setInputValue,
  handleSendMessage,
  handleKeyPress,
}: RightFooterProps) => {
  return (
    <StickyPaper type="footer">
      <Group
        gap="xs"
        wrap="nowrap"
      >
        <TextInput
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{ flex: 1 }}
          radius="xl"
          size="md"
        />
        <ActionIcon
          size="lg"
          radius="xl"
          color="primary"
          variant="filled"
          onClick={handleSendMessage}
          disabled={!inputValue.trim()}
        >
          <MdSend size={20} />
        </ActionIcon>
      </Group>
    </StickyPaper>
  )
}

export { Footer }
