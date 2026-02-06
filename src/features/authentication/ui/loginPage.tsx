import { Title, Text, Anchor, Stack, Center } from '@mantine/core'
import { ContainerWithBreadCrumb } from '@shared/ui/container-with-bread-crumb'
import { Responsive } from '@shared/hooks/responsive'
import { LoginForm } from '@entities/login-form'

export const LoginFeature = () => {
  const { isMobile } = Responsive()

  return (
    <ContainerWithBreadCrumb title="login">
      <Center>
        <Stack
          gap="sm"
          w={isMobile ? '100%' : '50%'}
          py="5vh"
        >
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
          <LoginForm />
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
      </Center>
    </ContainerWithBreadCrumb>
  )
}
