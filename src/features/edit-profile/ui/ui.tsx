import { Stack } from '@mantine/core'
import { ResText } from '@shared/styles'
import { AddressModal } from './businessAddressModal'
import {
  PhotoIcon,
  PhotoInfo,
  ProfilePhoto,
  ProfilePhotoSection,
  UploadButton,
} from '../styles'
import { AccountDetails } from './accountDetails'
import { PrivateDetails } from './privateDetails'
import { BusinessDetails } from './businessDetails'
import { useManageEditProfile } from '../modal'
import { TypographySize } from '@shared/typography'
import { SettingsListConentWrapper } from '@shared/ui/setting-list-content-wrapper'

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
  } = useManageEditProfile()
  return (
    <>
      <SettingsListConentWrapper
        allowButton
        title="Edit profile"
        buttonTitle="save"
        handleSubmit={handleSubmit(onSubmit)}
      >
        <Stack
          gap={3}
          mb={30}
        >
          <ResText
            c="darkText"
            fontSize={TypographySize.Normal}
          >
            profile photo
          </ResText>

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
              <ResText
                c="darkText"
                fontSize={TypographySize.SemiSmall}
              >
                Your favorite face picture as an important way for buyers and
                sellers to learn about each part other.
              </ResText>
              <UploadButton>
                Upload a photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
              </UploadButton>
            </PhotoInfo>
          </ProfilePhotoSection>

          <AccountDetails control={control} />
        </Stack>

        <Stack
          gap={3}
          mb={30}
        >
          <PrivateDetails control={control} />
        </Stack>

        <Stack
          gap={3}
          mb={30}
        >
          <BusinessDetails
            control={control}
            businessAddress={businessAddress}
            setAddressModalOpen={setAddressModalOpen}
          />
        </Stack>
      </SettingsListConentWrapper>

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
