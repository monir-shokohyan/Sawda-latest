import { useState } from 'react'
import { GoAlert } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import {
  Tooltip,
  Button,
  Text,
  Stack,
  Group,
  Alert,
  Title,
  Paper,
} from '@mantine/core'
import { TbHome, TbRefresh } from 'react-icons/tb'

const ErrorFallback = ({ error }: { error: Error }) => {
  const navigate = useNavigate()
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Paper
      shadow="sm"
      p="xl"
      radius="md"
      style={{ maxWidth: 600, margin: 'auto', marginTop: '10vh' }}
    >
      <Stack
        align="center"
        gap="xl"
      >
        {/* Title and Subtitle */}
        <div style={{ textAlign: 'center' }}>
          <Title
            order={2}
            c="red.7"
          >
            Something went wrong
          </Title>
          <Text
            c="dimmed"
            mt="sm"
          >
            Unfortunately, an error occurred. Please try again later.
          </Text>
        </div>

        {/* Action Buttons */}
        <Group gap="md">
          <Tooltip
            label="Reload the page"
            position="bottom"
          >
            <Button
              leftSection={<TbRefresh size={18} />}
              onClick={() => window.location.reload()}
              color="blue"
            >
              Reload
            </Button>
          </Tooltip>

          <Tooltip
            label="Return to homepage"
            position="bottom"
          >
            <Button
              leftSection={<TbHome size={18} />}
              onClick={() => navigate('/')}
              variant="default"
            >
              Home
            </Button>
          </Tooltip>
        </Group>

        {/* Toggle Error Details */}
        <Button
          variant="subtle"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide error details' : 'Show error details'}
        </Button>

        {/* Error Details */}
        {showDetails && (
          <Alert
            icon={<GoAlert size={20} />}
            color="red"
            variant="light"
            radius="md"
            style={{ maxWidth: '100%' }}
          >
            <Text fw={500}>{error.message || 'Unknown error.'}</Text>
          </Alert>
        )}
      </Stack>
    </Paper>
  )
}

export { ErrorFallback }
