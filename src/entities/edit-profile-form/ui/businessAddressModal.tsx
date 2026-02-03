import React from 'react'
import { Button as MantineButton, Stack, useMantineTheme } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInput } from '@shared/ui/form'
import { AddressModalProps, BusinessAddress } from '../types'
import { ModalDefaultValue } from '../constant'
import { AddressSchema } from '../schema'
import { HModal } from '@shared/styles'
import { Logo } from '@shared/ui/logo'

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
  const theme = useMantineTheme()

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
    <HModal
      opened={opened}
      onClose={onClose}
      title={<Logo />}
      size="md"
      centered
      transitionProps={{ transition: 'fade', duration: 200 }}
      styles={{
        header: {
          background: theme.colors.background[8],
        },
        body: {
          background: theme.colors.background[8],
          padding: '15px',
        },
      }}
    >
      <Stack gap={3}>
        <FormInput<BusinessAddress>
          control={control}
          name="streetAddress"
          label="Street Address"
          mb={10}
        />

        <FormInput<BusinessAddress>
          control={control}
          name="city"
          label="City"
          mb={10}
        />

        <FormInput<BusinessAddress>
          control={control}
          name="stateProvince"
          label="State/Province"
          mb={10}
        />

        <FormInput<BusinessAddress>
          control={control}
          name="postalCode"
          label="Postal Code"
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
    </HModal>
  )
}

export { AddressModal }
export type { BusinessAddress }
