import { Details } from '@shared/ui/details/details'
import { FormInput } from '@shared/ui/form'
import { FormSelect } from '@shared/ui/form/FormSelect'
import { FaRegEyeSlash } from 'react-icons/fa'
import { GenderObj } from '../constant'
import { Control } from 'react-hook-form'
import { FormData } from '../types'

interface FormSetProps {
  control: Control<FormData>
}

const PrivateDetails = ({ control }: FormSetProps) => {
  return (
    <>
      <Details
        title="Private details"
        icon={<FaRegEyeSlash style={{ marginTop: '2px', flexShrink: 0 }} />}
        text="Only you can view this"
      />

      <FormInput
        label="Email"
        control={control}
        name="email"
        buttonTitle="Update"
        isButton={true}
      />

      <FormInput<FormData>
        control={control}
        name="mobileNumber"
        label="Mobile number"
        buttonTitle="Update"
        isButton={true}
      />

      <FormSelect
        label="Gender"
        name="gender"
        placeholder="Select Gender"
        control={control}
        data={GenderObj}
      />
    </>
  )
}

export { PrivateDetails }
