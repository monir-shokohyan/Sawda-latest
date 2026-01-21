import React from 'react'
import { Modal, Button as MantineButton, Stack } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInput } from '@shared/ui/form'
import { AddressModalProps, BusinessAddress } from '../types'
import { ModalDefaultValue } from '../constant'
import { AddressSchema } from '../schema'

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
    <Modal
      opened={opened}
      onClose={onClose}
      title="Add Business Address"
      size="md"
    >
      <Stack gap={3}>
        <FormInput<BusinessAddress>
          control={control}
          name="streetAddress"
          label="Street Address"
        />

        <FormInput<BusinessAddress>
          control={control}
          name="city"
          label="City"
        />

        <FormInput<BusinessAddress>
          control={control}
          name="stateProvince"
          label="State/Province"
        />

        <FormInput<BusinessAddress>
          control={control}
          name="postalCode"
          label="Postal Code"
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
    </Modal>
  )
}

export { AddressModal }
export type { BusinessAddress }
