import { Stack, Flex } from '@mantine/core'
import { ResText } from '@shared/styles'
import { AddressModal } from './businessAddressModal'
import {
  PhotoIcon,
  PhotoInfo,
  ProfilePhoto,
  ProfilePhotoSection,
  SaveButton,
  UploadButton,
} from '../styles'
import { AccountDetails } from './accountDetails'
import { PrivateDetails } from './privateDetails'
import { BusinessDetails } from './businessDetails'
import { useManageEditProfile } from '../modal'
import { TypographySize } from '@shared/typography'

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
      <Flex
        py={isMobile ? 20 : 40}
        px={isMobile ? 10 : 40}
        direction="column"
        bg="background.8"
      >
        <ResText
          c="darkText"
          fontSize={TypographySize.Large}
        >
          Edit profile
        </ResText>

        <div>
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

          <SaveButton
            type="button"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </SaveButton>
        </div>
      </Flex>

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
