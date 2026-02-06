import { Divider, Stack } from '@mantine/core'
import { SButton } from '@shared/styles'
import { AddressModal } from './businessAddressModal'
import {
  PhotoIcon,
  PhotoInfo,
  ProfilePhoto,
  ProfilePhotoSection,
} from '../styles'
import { AccountDetails } from './accountDetails'
import { PrivateDetails } from './privateDetails'
import { BusinessDetails } from './businessDetails'
import { useManageEditProfile } from '../modal'
import { FormWrapper } from '@shared/ui/form-wrapper'
import { Paragraph } from '@shared/typography/paragraph'
import { SubHeading } from '@shared/typography/sub-heading'

const Ui = () => {
  const {
    handleAddressSave,
    handlePhotoUpload,
    handleSubmit,
    photoPreview,
    control,
    addressModalOpen,
    setAddressModalOpen,
    businessAddress,
    onSubmit,
    isMobile,
  } = useManageEditProfile()
  return (
    <>
      <FormWrapper
        allowButton
        title="Edit profile"
        buttonTitle="save"
        handleSubmit={handleSubmit(onSubmit)}
        buttonFullWidth={isMobile}
      >
        <Divider />
        <Stack
          gap={3}
          mb={10}
        >
          <SubHeading>
            profile photo
          </SubHeading>
          <ProfilePhotoSection>
            <ProfilePhoto>
              {photoPreview ? (
                <img
                  src={photoPreview}
                  alt="Profile"
                />
              ) : (
                <PhotoIcon />
              )}
            </ProfilePhoto>

            <PhotoInfo>
               <Paragraph>
                Your favorite face picture as an important way for buyers and
                sellers to learn about each part other.
              </Paragraph>

              <SButton
                variant="outline"
                component="label"
              >
                Upload a photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
              </SButton>
            </PhotoInfo>
          </ProfilePhotoSection>
          <Divider />

          <AccountDetails control={control} />
        </Stack>
        <Divider />
        <Stack
          gap={3}
          mb={10}
        >
          <PrivateDetails control={control} />
        </Stack>

        <Divider />
        <Stack
          gap={3}
          mb={10}
        >
          <BusinessDetails
            control={control}
            businessAddress={businessAddress}
            setAddressModalOpen={setAddressModalOpen}
          />
        </Stack>
      </FormWrapper>

      <AddressModal
        opened={addressModalOpen}
        onClose={() => setAddressModalOpen(false)}
        onSave={handleAddressSave}
        initialData={businessAddress}
      />
    </>
  )
}

export { Ui }
