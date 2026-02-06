import { ProfileProps } from '@features/product-card/types'
import {
  Avatar,
  Button,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { SubHeading } from '@shared/typography/sub-heading'
import { GoOrganization } from 'react-icons/go'
import { MdCalendarToday, MdEmail, MdLink, MdLocationOn } from 'react-icons/md'

const Ui = ({ Profile }: { Profile: ProfileProps['profile'] }) => {
  const theme = useMantineTheme()
  return (
    <Stack
      gap="lg"
      p="md"
    >
      {/* Profile Header */}
      <Flex
        direction="column"
        align="center"
        gap="md"
      >
        <Avatar
          color="blue"
          size={80}
          radius="50%"
          src="/Profile.png"
        />
        <Stack
          gap={5}
          align="center"
        >
          <Text
            fw={600}
            size="xl"
          >
            {Profile.username}
          </Text>
          {Profile.email && (
            <Group gap={5}>
              <MdEmail
                size={16}
                color={theme.colors.gray?.[6]}
              />
              <Text
                size="sm"
                c="dimmed"
              >
                {Profile.email}
              </Text>
            </Group>
          )}
        </Stack>
      </Flex>

      <Divider />

      {/* Bio Section */}
      {Profile.bio && (
        <>
          <Stack gap="xs">
            <Text
              fw={600}
              size="sm"
            >
              Bio
            </Text>
            <Text
              size="sm"
              c="dimmed"
            >
              {Profile.bio}
            </Text>
          </Stack>
          <Divider />
        </>
      )}

      {/* Additional Information */}
      <Stack gap="md">
        {Profile.location && (
          <Group gap="xs">
            <MdLocationOn
              size={18}
              color={theme.colors.blue?.[6]}
            />
            <Text size="sm">{Profile.location}</Text>
          </Group>
        )}

        {Profile.company && (
          <Group gap="xs">
            <GoOrganization
              size={18}
              color={theme.colors.blue?.[6]}
            />
            <Text size="sm">{Profile.company}</Text>
          </Group>
        )}

        {Profile.website && (
          <Group gap="xs">
            <MdLink
              size={18}
              color={theme.colors.blue?.[6]}
            />
            <Text
              size="sm"
              component="a"
              href={Profile.website}
              target="_blank"
              style={{ textDecoration: 'underline' }}
            >
              {Profile.website}
            </Text>
          </Group>
        )}

        {Profile.joinedDate && (
          <Group gap="xs">
            <MdCalendarToday
              size={18}
              color={theme.colors.blue?.[6]}
            />
            <Text
              size="sm"
              c="dimmed"
            >
              Joined {Profile.joinedDate}
            </Text>
          </Group>
        )}
      </Stack>

      {/* Stats */}
      {(Profile.followers || Profile.following || Profile.posts) && (
        <>
          <Divider />
          <Group justify="space-around">
            {Profile.posts !== undefined && (
              <Stack
                gap={0}
                align="center"
              >
                <Text
                  fw={600}
                  size="lg"
                >
                  {Profile.posts}
                </Text>
                <Text
                  size="xs"
                  c="dimmed"
                >
                  Posts
                </Text>
              </Stack>
            )}
            {Profile.followers !== undefined && (
              <Stack
                gap={0}
                align="center"
              >
                <Text
                  fw={600}
                  size="lg"
                >
                  {Profile.followers}
                </Text>
                <Text
                  size="xs"
                  c="dimmed"
                >
                  Followers
                </Text>
              </Stack>
            )}
            {Profile.following !== undefined && (
              <Stack
                gap={0}
                align="center"
              >
                <Text
                  fw={600}
                  size="lg"
                >
                  {Profile.following}
                </Text>
                <Text
                  size="xs"
                  c="dimmed"
                >
                  Following
                </Text>
              </Stack>
            )}
          </Group>
        </>
      )}

      <Group grow>
        <Button
          variant="outline"
          radius={20}
          size="md"
        >
          <SubHeading c="primary">Send message</SubHeading>
        </Button>
      </Group>
    </Stack>
  )
}

export { Ui }
