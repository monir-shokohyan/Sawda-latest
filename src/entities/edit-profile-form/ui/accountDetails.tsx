import { Details } from '@shared/ui/details/details'
import { FormInput } from '@shared/ui/form'
import { FormSelect } from '@shared/ui/form/FormSelect'
import { FormTextarea } from '@shared/ui/form/FormTextArea'
import { FaRegEye } from 'react-icons/fa'
import { AfghanistanCities } from '../constant'
import { Control } from 'react-hook-form'
import { FormData } from '../types'
import { useTranslation } from 'react-i18next'

interface FormSetProps {
  control: Control<FormData>
}

const AccountDetails = ({ control }: FormSetProps) => {
  const { t } = useTranslation()
  return (
    <>
      <Details
        title={t('profile.accountDetails')}
        icon={<FaRegEye style={{ marginTop: '2px', flexShrink: 0 }} />}
        text={t('profile.thisInfoAppears')}
      />

      <FormInput
        label={t('auth.username')}
        control={control}
        name="username"
      />
      <FormInput
        label={t('profile.fullName')}
        control={control}
        name="fullName"
      />
      <FormInput
        label={t('auth.phoneNumber')}
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
        label={t('auth.emailAddress')}
        control={control}
        name="emailAddress"
      />

      <FormTextarea
        label={t('profile.bio')}
        control={control}
        name="bio"
      />
    </>
  )
}

export { AccountDetails }
