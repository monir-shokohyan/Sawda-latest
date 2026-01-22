import { Details } from '@shared/ui/details/details'
import { FormInput } from '@shared/ui/form'
import { FaInfoCircle, FaPlus } from 'react-icons/fa'
import { Control } from 'react-hook-form'
import { FormData } from '../types'
import { AddButton, LinkText } from '../styles'
import { Stack } from '@mantine/core'
import { ResText } from '@shared/styles'
import { TypographySize } from '@shared/typography'

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
  return (
    <>
      <Details
        title="Business details"
        icon={<FaInfoCircle style={{ marginTop: '2px', flexShrink: 0 }} />}
        text="Buyers won't see this info unless you switch to a professional
                account. Professional accounts make it a lot easier for buyers
                to find you and they can tap into Info about you you can create
                a professional account."
      />

      <FormInput<FormData>
        control={control}
        label="Company name"
        name="companyName"
      />
      <FormInput<FormData>
        control={control}
        label="Business registration number"
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
        label="Business email"
        name="businessEmail"
      />

      <div style={{ fontSize: '13px', marginBottom: '12px' }}>
        Verify number to let buyers WhatsApp you.
      </div>
      <LinkText>Verify WhatsApp number now</LinkText>
      <Stack
        gap={3}
        mb={30}
      >
        <label>
          <ResText
            fontSize={TypographySize.SemiSmall}
            c="darkText"
          >
            Business address
          </ResText>
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
          <AddButton
            type="button"
            onClick={() => setAddressModalOpen(true)}
          >
            <FaPlus />
            <ResText
              fontSize={TypographySize.SemiSmall}
              c="darkText"
            >
              Add address
            </ResText>
          </AddButton>
        )}
      </Stack>
    </>
  )
}

export { BusinessDetails }
