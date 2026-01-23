import { Stack } from '@mantine/core'
import { useManagePrivacy } from '../modal'
import { SettingsListConentWrapper } from '@shared/ui/setting-list-content-wrapper'
import { Details } from '@shared/ui/details/details'
import { FormCheckbox } from '@shared/ui/form/FormCheckBox'
import { MdInfoOutline } from 'react-icons/md'

const Ui = () => {
  const { control } = useManagePrivacy()
  return (
    <>
      <SettingsListConentWrapper
        allowButton={false}
        title="Data & privacy settings"
        buttonTitle=""
      >
        <Stack
          gap={3}
          mb={30}
        >
          <Details
            title="Privacy preferences"
            text="Sawda may share information that do not constitute personal data with our our advertising and analytics partners. This contributes to Sawda’s business sustainability in the long run, so that we can keep our basic features free for all users. Thank you for your support. More info"
            icon={<MdInfoOutline style={{ marginTop: '2px', flexShrink: 0 }} />}
          />
          
          <Stack
            gap={10}
            my={30}
            mx={30}
          >
          <FormCheckbox
            label="Interest based information"
            control={control}
            name="interest"
          />
          <FormCheckbox
            label="Location based information"
            control={control}
            name="location"
          />
          <FormCheckbox
            label="Demographic information"
            control={control}
            name="demographic"
          />

        </Stack>
        </Stack>
      </SettingsListConentWrapper>
    </>
  )
}

export { Ui }
