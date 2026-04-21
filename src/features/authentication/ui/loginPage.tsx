import { Title, Text, Anchor, Stack, Center } from '@mantine/core'
import { ContainerWithBreadCrumb } from '@shared/ui/container-with-bread-crumb'
import { Responsive } from '@shared/hooks/responsive'
import { LoginForm } from '@entities/login-form'
import { useTranslation } from 'react-i18next'

export const LoginFeature = () => {
  const { isMobile } = Responsive()
    const { t } = useTranslation()


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
            {t('auth.welcomeBack')}
          </Title>

          <Text
            ta="center"
            c="dimmed"
            size="sm"
          >
            {t('auth.signInToAccount')}
          </Text>
          <LoginForm />
          <Text
            ta="center"
            size="sm"
            c="dimmed"
          >
            {t('auth.dontHaveAccount')}
            <Anchor
              href="/register"
              fw={600}
            >
              {t('auth.signUp')}
            </Anchor>
          </Text>
        </Stack>
      </Center>
    </ContainerWithBreadCrumb>
  )
}
