import { Divider, Stack } from '@mantine/core'
import { useManageNotification } from '../modal'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { Details } from '@shared/ui/details/details'
import { FormCheckbox } from '@shared/ui/form/FormCheckBox'

const Ui = () => {
  const { control } = useManageNotification()
  return (
    <>
      <FormWrapper
        allowButton={false}
        title="Notifications"
        buttonTitle=""
      >
        <Stack
          gap={3}
          mb={10}
        >
          <Details
            title="Listings you are interested in"
            allowBox={false}
          />
          <Stack
            gap={10}
            my={10}
            mx={30}
          >
            <FormCheckbox
              label="Email"
              control={control}
              name="email"              
            />
            <FormCheckbox
              label="Mobile app push noifications"
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
            title="From sawda"
            allowBox={false}
          />
          <Stack
            gap={10}
            my={10}
            mx={30}
          >
            <FormCheckbox
              label="Email"
              control={control}
              name="sawdaEmail"
            />
            <FormCheckbox
              label="Mobile app push noifications"
              control={control}
              name="sawdaPushNotification"
            />
            <FormCheckbox
              label="Sms"
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
