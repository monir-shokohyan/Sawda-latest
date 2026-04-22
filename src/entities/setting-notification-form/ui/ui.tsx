import { Divider, Stack } from '@mantine/core'
import { useManageNotification } from '../modal'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { Details } from '@shared/ui/details/details'
import { FormCheckbox } from '@shared/ui/form/FormCheckBox'

const Ui = () => {
  const { control, t } = useManageNotification()
  return (
    <>
      <FormWrapper
        allowButton={false}
        title={t('settings.notifications')}
        buttonTitle=""
      >
        <Stack
          gap={3}
          mb={10}
        >
          <Details
            title={t('settings.listingsInterested')}
            allowBox={false}
          />
          <Stack
            gap={10}
            my={10}
            mx={30}
          >
            <FormCheckbox
              label={t('auth.email')}
              control={control}
              name="email"
            />
            <FormCheckbox
              label={t('settings.mobileAppPush')}
              control={control}
              name="pushNotification"
            />
          </Stack>
        </Stack>
        <Stack
          gap={3}
          mb={10}
        >
          <Divider />
          <Details
            title={t('messages.fromSawda')}
            allowBox={false}
          />
          <Stack
            gap={10}
            my={10}
            mx={30}
          >
            <FormCheckbox
              label={t('auth.email')}
              control={control}
              name="sawdaEmail"
            />
            <FormCheckbox
              label={t('settings.mobileAppPush')}
              control={control}
              name="sawdaPushNotification"
            />
            <FormCheckbox
              label={t('settings.sms')}
              control={control}
              name="sms"
            />
          </Stack>
        </Stack>
      </FormWrapper>
    </>
  )
}

export { Ui }
