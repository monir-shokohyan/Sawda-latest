import { ForgetForm } from '@entities/forget-password'
import { OtpForm } from '@entities/otp'
import { Center } from '@mantine/core'
import { Title, Text, Anchor, Stack } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'

import { ContainerWithBreadCrumb } from '@shared/ui/container-with-bread-crumb'
export const OtpFeature = () => {
  const { isMobile } = Responsive()

  return (
    <ContainerWithBreadCrumb title="OTP">
      <Center>
        <Stack
          gap="sm"
          w={isMobile ? '100%' : '35%'}
          py="5vh"
        >
          <Title
            order={2}
            ta="center"
            c="var(--mantine-primary-color-filled)"
          >
            OTP
          </Title>

          <Text
            ta="center"
            c="dimmed"
            size="sm"
          >
            Enter the verification code sent to your email/phone
          </Text>

          <OtpForm />
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
