import { ForgetForm } from '@entities/forget-password'
import { Center } from '@mantine/core'
import {
  Title,
  Text,
  Anchor,
  Stack,
} from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import { ContainerWithBreadCrumb } from '@shared/ui/container-with-bread-crumb'

export const ForgotPasswordFeature = () => {
  const { isMobile } = Responsive()

  return (
     <ContainerWithBreadCrumb title="forgot-password">
      <Center>
          <Stack gap="sm"
            w={isMobile ? '100%' : '50%'}
            py="5vh">
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
              Enter your email or password to receive a reset link
            </Text>

            <ForgetForm />

            <Text
              ta="center"
              size="sm"
              c="dimmed"
            >
              Remembered your password?
              <Anchor
                href="/login"
                fw={600}
              >
                Back to Login
              </Anchor>
            </Text>
          </Stack>
      </Center>
    </ContainerWithBreadCrumb>
  )
}
