import { useState } from 'react'
import { GoAlert } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { Tooltip, Text, Stack, Group, Alert, Title, Paper, Button } from '@mantine/core'
import { TbHome, TbRefresh } from 'react-icons/tb'
import { FallbackProps } from 'react-error-boundary'
import { SButton } from '@shared/styles'

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate()
  const [showDetails, setShowDetails] = useState(false)

  const errorMessage =
    error instanceof Error
      ? error.message
      : typeof error === 'string'
        ? error
        : 'An unexpected error occurred'

  return (
    <Paper
      shadow="sm"
      p="xl"
      radius="md"
      style={{ maxWidth: '90%', margin: 'auto', marginTop: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      bg="background.9"
      h="55vh"
    >
      <Stack
        align="center"
        gap="xl"
      >
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

        <Group gap="md">
          <Tooltip
            label="Try again (resets boundary)"
            position="bottom"
          >
            <SButton
              leftSection={<TbRefresh size={18} />}
              onClick={resetErrorBoundary}
              color="primary"
            >
              Try Again
            </SButton>
          </Tooltip>

          <Tooltip
            label="Return to homepage"
            position="bottom"
          >
            <Button
              leftSection={<TbHome size={18} />}
              onClick={() => navigate('/')}
              variant="outline"
            >
              Home
            </Button>
          </Tooltip>
        </Group>

        <Button
          variant="subtle"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide error details' : 'Show error details'}
        </Button>

        {showDetails && (
          <Alert
            icon={<GoAlert size={20} />}
            color="red"
            variant="light"
            radius="md"
            style={{ maxWidth: '100%' }}
          >
            <Text fw={500}>{errorMessage}</Text>
            {process.env.NODE_ENV !== 'production' &&
              error instanceof Error && (
                <Text
                  mt="xs"
                  size="sm"
                  c="dimmed"
                  component="pre"
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {error.stack}
                </Text>
              )}
          </Alert>
        )}
      </Stack>
    </Paper>
  )
}

export { ErrorFallback }
