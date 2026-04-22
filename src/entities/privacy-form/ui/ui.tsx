import { useManagePrivacy } from '../modal'
import { FormCheckbox } from '@shared/ui/form/FormCheckBox'

const Ui = () => {
  const { control, t } = useManagePrivacy()
  return (
    <>
      <FormCheckbox
        label={t('settings.locationBasedInfo')}
        control={control}
        name="interest"
      />
      <FormCheckbox
        label={t('settings.locationBasedInfo')}
        control={control}
        name="location"
      />
      <FormCheckbox
        label={t('settings.demographicInfo')}
        control={control}
        name="demographic"
      />
    </>
  )
}

export { Ui }
