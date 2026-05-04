import { OtpForm } from '@entities/otp'
import { Center } from '@mantine/core'
import { Title, Text, Anchor, Stack } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'

import { ContainerWithBreadCrumb } from '@shared/ui/container-with-bread-crumb'
import { useTranslation } from 'react-i18next'
export const OtpFeature = () => {
  const { isMobile } = Responsive()
  const { t } = useTranslation()

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
            {t('auth.enterVerificationCode')}
          </Text>

          <OtpForm />
          <Text
            ta="center"
            size="sm"
            c="dimmed"
          >
            {t('auth.rememberedPassword')}
            <Anchor
              href="/login"
              fw={600}
            >
              {t('auth.backToLogin')}
            </Anchor>
          </Text>
        </Stack>
      </Center>
    </ContainerWithBreadCrumb>
  )
}
