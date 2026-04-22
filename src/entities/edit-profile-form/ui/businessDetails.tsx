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
import { useIsRtlLang } from '@shared/hooks'

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
  const { textAlign } = useIsRtlLang()
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
        label={t('profile.contactNumber')}
        name="contactNumber"
      />
      <FormInput<FormData>
        control={control}
        label={t('profile.website')}
        name="website"
      />
      <FormInput<FormData>
        control={control}
        label={t('profile.businessEmail')}
        name="businessEmail"
      />

      <div style={{ fontSize: '13px', marginBottom: '12px' }}>
        {t('profile.verifyNumber')}
      </div>

      <LinkText>{t('profile.verifyWhatsapp')}</LinkText>
      <Stack
        gap={3}
        mb={30}
      >
        <label>
          <Paragraph style={{textAlign}}>{t('address.businessAddress')}</Paragraph>
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
              {t('profile.editAddress')}
            </LinkText>
          </div>
        ) : (
          <SButton
            type="button"
            onClick={() => setAddressModalOpen(true)}
            variant="outline"
            rightSection={<FaPlus />}
          >
            {t('profile.addAddress')}
          </SButton>
        )}
      </Stack>
    </>
  )
}

export { BusinessDetails }
