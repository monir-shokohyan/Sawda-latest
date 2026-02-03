import { Details } from '@shared/ui/details/details'
import { FormInput } from '@shared/ui/form'
import { FormSelect } from '@shared/ui/form/FormSelect'
import { FormTextarea } from '@shared/ui/form/FormTextArea'
import { FaRegEye } from 'react-icons/fa'
import { AfghanistanCities } from '../constant'
import { Control } from 'react-hook-form'
import { FormData } from '../types'

interface FormSetProps {
  control: Control<FormData>
}

const AccountDetails = ({ control }: FormSetProps) => {
  return (
    <>
      <Details
        title="Account details"
        icon={<FaRegEye style={{ marginTop: '2px', flexShrink: 0 }} />}
        text="This info appears on your profile profile"
      />

      <FormInput
        label="User name"
        control={control}
        name="username"
      />
      <FormInput
        label="Full name"
        control={control}
        name="fullName"
      />
      <FormInput
        label="Phone number"
        control={control}
        name="phoneNumber"
      />

      <FormSelect
        label="Provinces"
        name="province"
        placeholder="Select province"
        control={control}
        data={AfghanistanCities}
      />

      <FormInput
        label="Email address"
        control={control}
        name="emailAddress"
      />

      <FormTextarea
        label="Bio"
        control={control}
        name="bio"
      />
    </>
  )
}

export { AccountDetails }
