import { useManagePrivacy } from '../modal'
import { FormCheckbox } from '@shared/ui/form/FormCheckBox'

const Ui = () => {
  const { control } = useManagePrivacy()
  return (
    <>
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
    </>
  )
}

export { Ui }
