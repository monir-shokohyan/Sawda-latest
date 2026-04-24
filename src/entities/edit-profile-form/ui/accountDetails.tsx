import { Details } from '@shared/ui/details/details'
import { FormInput } from '@shared/ui/form'
import { FormSelect } from '@shared/ui/form/FormSelect'
import { FormTextarea } from '@shared/ui/form/FormTextArea'
import { FaRegEye } from 'react-icons/fa'
import { Control } from 'react-hook-form'
import { FormData } from '../types'
import { useTranslation } from 'react-i18next'
import { ProvinceConstants } from '@entities/filter-form/constant'

interface FormSetProps {
  control: Control<FormData>
}

const AccountDetails = ({ control }: FormSetProps) => {
  const { t } = useTranslation()
  const modifiedProvinceContant = ProvinceConstants.map(item=>({
    ...item,
    label: t(item.label as any)
  }))
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
        label={t('profile.provinces')}
        name="province"
        placeholder={t('profile.selectProvince')}
        control={control}
        data={modifiedProvinceContant}
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
