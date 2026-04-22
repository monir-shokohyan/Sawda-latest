import { Stack } from '@mantine/core'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { Details } from '@shared/ui/details/details'
import { MdInfoOutline } from 'react-icons/md'
import { PrivacyForm } from '@entities/privacy-form'
import { useTranslation } from 'react-i18next'

const Ui = () => {
  const { t } = useTranslation()
  return (
    <>
      <FormWrapper
        allowButton={false}
        title={t('settings.dataPrivacy')}
        buttonTitle=""
      >
        <Stack
          gap={3}
          mb={30}
        >
          <Details
            title={t('settings.privacyPreferences')}
            text={t('privacy.infoText')}
            icon={<MdInfoOutline style={{ marginTop: '2px', flexShrink: 0 }} />}
          />

          <Stack
            gap={10}
            my={30}
            mx={30}
          >
            <PrivacyForm />
          </Stack>
        </Stack>
      </FormWrapper>
    </>
  )
}

export { Ui }
