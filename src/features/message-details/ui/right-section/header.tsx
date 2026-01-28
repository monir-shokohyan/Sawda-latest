import { StickyPaper } from '@features/message-details/styles'
import { RightHeaderProps } from '@features/message-details/types'
import { ActionIcon, Avatar, Group, Stack, Text } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { MdArrowBack, MdMoreVert } from 'react-icons/md'

const Header = ({ selectedMessage, onBack }: RightHeaderProps) => {
  const { isMobile } = Responsive()
  return (
    <StickyPaper type="header">
      <Group justify="space-between">
        <Group gap="md">
          {isMobile && onBack && (
            <ActionIcon
              variant="subtle"
              onClick={onBack}
            >
              <MdArrowBack size={20} />
            </ActionIcon>
          )}

          <Avatar
            src={selectedMessage.avatar}
            alt={selectedMessage.username}
            radius="xl"
            size="md"
            color="primary"
          >
            {selectedMessage.username.charAt(0).toUpperCase()}
          </Avatar>

          <Stack gap={0}>
            <Text
              fw={600}
              size="md"
            >
              {selectedMessage.username}
            </Text>
            <Text
              size="xs"
              c="dimmed"
            >
              Active now
            </Text>
          </Stack>
        </Group>

        <ActionIcon
          variant="subtle"
          color="gray"
        >
          <MdMoreVert size={20} />
        </ActionIcon>
      </Group>
    </StickyPaper>
  )
}

export { Header }
