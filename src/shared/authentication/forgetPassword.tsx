import { supabaseClient } from '@app/config/client'
import { useMantineColorScheme } from '@mantine/core'
import {
  Paper,
  TextInput,
  Button,
  Title,
  Text,
  Anchor,
  Stack,
  Container,
  Box,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { TbMail } from 'react-icons/tb'

export const ForgotPasswordPage = () => {
  const { colorScheme } = useMantineColorScheme()
  const isDark = colorScheme === 'dark'

  const form = useForm({
    initialValues: { email: '' },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  const handleSubmit = async (values: { email: string }) => {
    const { error } = await supabaseClient.auth.resetPasswordForEmail(
      values.email,
      {
        redirectTo: `${window.location.origin}/reset-password`,
      },
    )

    if (error) {
      notifications.show({
        title: 'Error',
        message: error.message || 'Failed to send reset email',
        color: 'red',
      })
    } else {
      notifications.show({
        title: 'Success',
        message: 'Check your email for the password reset link',
        color: 'green',
      })
    }
  }

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: isDark
          ? 'linear-gradient(135deg, var(--mantine-color-dark-9) 0%, var(--mantine-color-dark-7) 100%)'
          : 'linear-gradient(135deg, var(--mantine-color-gray-1) 0%, var(--mantine-color-blue-1) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--mantine-spacing-md)',
      }}
    >
      <Container
        size="xs"
        style={{ width: '100%', maxWidth: 420 }}
      >
        <Paper
          radius="md"
          p={{ base: 'md', sm: 'xl' }}
          withBorder
          shadow="xl"
          style={{
            backgroundColor: isDark
              ? 'var(--mantine-color-dark-8)'
              : 'var(--mantine-color-white)',
          }}
        >
          <Stack gap="lg">
            <Title
              order={2}
              ta="center"
              c="var(--mantine-primary-color-filled)"
            >
              Forgot Password?
            </Title>

            <Text
              ta="center"
              c="dimmed"
              size="sm"
            >
              Enter your email to receive a reset link
            </Text>

            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="md">
                <TextInput
                  required
                  label="Email"
                  placeholder="your@email.com"
                  leftSection={<TbMail size={16} />}
                  {...form.getInputProps('email')}
                  size="md"
                />

                <Button
                  fullWidth
                  type="submit"
                  size="md"
                  mt="md"
                >
                  Send Reset Link
                </Button>
              </Stack>
            </form>

            <Text
              ta="center"
              size="sm"
              c="dimmed"
            >
              Remembered your password?{' '}
              <Anchor
                href="/login"
                fw={600}
              >
                Back to Login
              </Anchor>
            </Text>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}
