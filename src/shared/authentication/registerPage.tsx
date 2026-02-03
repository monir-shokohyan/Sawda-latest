import { Center } from '@mantine/core'
import { Title, Text, Anchor, Stack } from '@mantine/core'
import { ContainerWithBreadCrumb } from '@shared/ui/container-with-bread-crumb'
import { Responsive } from '@shared/hooks/responsive'
import { RegisterForm } from '@entities/register-form'

export const RegisterPage = () => {
  const { isMobile } = Responsive()
  return (
    <ContainerWithBreadCrumb title="register">
      <Center>
        <Stack
          gap="lg"
          w={isMobile ? '100%' : '50%'}
          py="5vh"
        >
          <Stack gap="lg">
            <Title
              order={2}
              ta="center"
              c="var(--mantine-primary-color-filled)"
            >
              Create Account
            </Title>

            <Text
              ta="center"
              c="dimmed"
              size="sm"
            >
              Sign up to get started
            </Text>

            <RegisterForm />

            <Text
              ta="center"
              size="sm"
              c="dimmed"
            >
              Already have an account?{' '}
              <Anchor
                href="/login"
                fw={600}
              >
                Login
              </Anchor>
            </Text>
          </Stack>
        </Stack>
      </Center>
    </ContainerWithBreadCrumb>
  )
}
