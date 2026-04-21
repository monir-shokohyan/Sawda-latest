import { Details } from '@shared/ui/details/details'
import { FormInput } from '@shared/ui/form'
import { FaPlus } from 'react-icons/fa'
import { Control } from 'react-hook-form'
import { FormData } from '../types'
import { LinkText } from '../styles'
import { Stack } from '@mantine/core'
import { SButton } from '@shared/styles'
import { Paragraph } from '@shared/typography/paragraph'
import { useTranslation } from 'react-i18next'

interface FormSetProps {
  control: Control<FormData>
  businessAddress: any
  setAddressModalOpen: any
}

const BusinessDetails = ({
  control,
  businessAddress,
  setAddressModalOpen,
}: FormSetProps) => {
  const { t } = useTranslation()
  return (
    <>
      <Details
        title={t('profile.businessDetails')}
        allowBox={false}
      />
      <FormInput<FormData>
        control={control}
        label={t('profile.companyName')}
        name="companyName"
      />
      <FormInput<FormData>
        control={control}
        label={t('profile.businessRegNumber')}
        name="businessRegistrationNumber"
      />
      <FormInput<FormData>
        control={control}
        label="Contact number"
        name="contactNumber"
      />
      <FormInput<FormData>
        control={control}
        label="Your website"
        name="website"
      />
      <FormInput<FormData>
        control={control}
        label={t('profile.businessEmail')}
        name="businessEmail"
      />

      <div style={{ fontSize: '13px', marginBottom: '12px' }}>
        Verify number to let buyers WhatsApp you.
      </div>

      <LinkText>{t('profile.verifyWhatsapp')}</LinkText>
      <Stack
        gap={3}
        mb={30}
      >
        <label>
          <Paragraph>Business address</Paragraph>
        </label>
        {businessAddress ? (
          <div
            style={{
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '10px',
            }}
          >
            <div>{businessAddress.streetAddress}</div>
            <div>
              {businessAddress.city}, {businessAddress.stateProvince}{' '}
              {businessAddress.postalCode}
            </div>
            <LinkText
              onClick={() => setAddressModalOpen(true)}
              style={{ marginTop: '8px', display: 'inline-block' }}
            >
              Edit address
            </LinkText>
          </div>
        ) : (
          <SButton
            type="button"
            onClick={() => setAddressModalOpen(true)}
            variant="outline"
            rightSection={<FaPlus />}
          >
            Add address
          </SButton>
        )}
      </Stack>
    </>
  )
}

export { BusinessDetails }
