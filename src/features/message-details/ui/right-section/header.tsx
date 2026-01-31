import { StickyPaper } from '@features/message-details/styles'
import { RightHeaderProps } from '@features/message-details/types'
import { ProfileSection } from '@features/product-card/ui/profileSection'
import { ActionIcon, Group } from '@mantine/core'
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

          <ProfileSection
            profile={selectedMessage}
            showTime={false}
            showActiveNow
            usernameSize="1rem"
          />
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
