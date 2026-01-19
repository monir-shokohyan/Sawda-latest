import { useLogin } from '@refinedev/core'
import {
  Paper,
  TextInput,
  PasswordInput,
  Title,
  Text,
  Anchor,
  Stack,
  Container,
  Box,
  Group,
  Checkbox,
  useMantineColorScheme,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { TbMail, TbLock } from 'react-icons/tb'
import { SButton } from '@shared/styles'

export const LoginPage = () => {
  const { colorScheme } = useMantineColorScheme()
  const isDark = colorScheme === 'dark'

  const { mutate: login, isPending } = useLogin<{
    email: string
    password: string
  }>()

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length >= 6 ? null : 'Password too short'),
    },
  })

  const handleSubmit = (values: {
    email: string
    password: string
    remember: boolean
  }) => {
    login(
      { email: values.email, password: values.password },
      {
        onSuccess: (data) => {
          if (!data.success) {
            notifications.show({
              title: 'Login Failed',
              message: data.error?.message || 'Invalid credentials',
              color: 'red',
            })
          }
          localStorage.setItem('rememberMe', values.remember ? 'true' : 'false')
        },
        onError: (error) => {
          notifications.show({
            title: 'Error',
            message: error.message || 'Something went wrong',
            color: 'red',
          })
        },
      },
    )
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
              Welcome Back
            </Title>

            <Text
              ta="center"
              c="dimmed"
              size="sm"
            >
              Sign in to your account
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

                <PasswordInput
                  required
                  label="Password"
                  placeholder="Your password"
                  leftSection={<TbLock size={16} />}
                  {...form.getInputProps('password')}
                  size="md"
                />

                <Group
                  justify="space-between"
                  mt="xs"
                >
                  <Checkbox
                    label="Remember me"
                    {...form.getInputProps('remember', { type: 'checkbox' })}
                    size="sm"
                  />

                  <Anchor
                    size="sm"
                    href="/forgot-password"
                  >
                    Forgot password?
                  </Anchor>
                </Group>

                <SButton
                  fullWidth
                  type="submit"
                  loading={isPending}
                  size="md"
                  mt="lg"
                >
                  Sign In
                </SButton>
              </Stack>
            </form>

            <Text
              ta="center"
              size="sm"
              c="dimmed"
            >
              Don’t have an account?{' '}
              <Anchor
                href="/register"
                fw={600}
              >
                Sign up
              </Anchor>
            </Text>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}
