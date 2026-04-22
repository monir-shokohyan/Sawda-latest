import React from 'react'
import { Button as MantineButton, Stack, useMantineTheme } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInput } from '@shared/ui/form'
import { AddressModalProps, BusinessAddress } from '../types'
import { ModalDefaultValue } from '../constant'
import { AddressSchema } from '../schema'
import { BaseModal } from '@shared/ui/modal'
import { useTranslation } from 'react-i18next'

const AddressModal: React.FC<AddressModalProps> = ({
  opened,
  onClose,
  onSave,
  initialData,
}) => {
  const { control, handleSubmit, reset } = useForm<BusinessAddress>({
    resolver: yupResolver(AddressSchema),
    defaultValues: initialData || ModalDefaultValue,
  })
  const { t } = useTranslation()

  React.useEffect(() => {
    if (opened && initialData) {
      reset(initialData)
    } else if (opened && !initialData) {
      reset(ModalDefaultValue)
    }
  }, [opened, initialData, reset])

  const onSubmit = (data: BusinessAddress): void => {
    onSave(data)
  }

  return (
    <BaseModal
      opened={opened}
      onClose={onClose}
      size="md"
      showLogo={false}
      title={t('address.addBusinessAddress')}
    >
      <Stack gap={3}>
        <FormInput<BusinessAddress>
          control={control}
          name="streetAddress"
          label={t('address.streetAddress')}
          mb={10}
        />

        <FormInput<BusinessAddress>
          control={control}
          name="city"
          label={t('address.city')}
          mb={10}
        />

        <FormInput<BusinessAddress>
          control={control}
          name="stateProvince"
          label={t('address.stateProvince')}
          mb={10}
        />

        <FormInput<BusinessAddress>
          control={control}
          name="postalCode"
          label={t('address.postalCode')}
          mb={10}
        />
      </Stack>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        <MantineButton
          variant="outline"
          onClick={onClose}
        >
          Cancel
        </MantineButton>
        <MantineButton onClick={handleSubmit(onSubmit)}>
          Save Address
        </MantineButton>
      </div>
    </BaseModal>
  )
}

export { AddressModal }
