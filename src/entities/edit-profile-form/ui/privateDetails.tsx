import { Details } from '@shared/ui/details/details'
import { FormInput } from '@shared/ui/form'
import { FormSelect } from '@shared/ui/form/FormSelect'
import { FaRegEyeSlash } from 'react-icons/fa'
import { GenderObj } from '../constant'
import { Control } from 'react-hook-form'
import { FormData } from '../types'
import { useTranslation } from 'react-i18next'

interface FormSetProps {
  control: Control<FormData>
}

const PrivateDetails = ({ control }: FormSetProps) => {
  const { t } = useTranslation()
  const modifiedGenderObj = GenderObj.map((item) => ({
    ...item,
    label: t(item.label),
  }))
  return (
    <>
      <Details
        title={t('profile.privateDetails')}
        allowBox={false}
      />

      <FormInput
        label={t('auth.email')}
        control={control}
        name="email"
        buttonTitle={t('profile.update')}
        isButton={true}
      />

      <FormInput<FormData>
        control={control}
        name="mobileNumber"
        label={t('auth.mobileNumber')}
        buttonTitle={t('profile.update')}
        isButton={true}
      />

      <FormSelect
        label={t('profile.gender')}
        name="gender"
        placeholder={t('profile.selectGender')}
        control={control}
        data={modifiedGenderObj}
      />
    </>
  )
}

export { PrivateDetails }
