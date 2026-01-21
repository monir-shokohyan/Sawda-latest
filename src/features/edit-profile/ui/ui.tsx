import React, { useState } from 'react'
import { Select, Button as MantineButton, Stack, Flex } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FaInfoCircle, FaPlus, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { ResText } from '@shared/styles'
import { FormInput } from '@shared/ui/form'
import { FormSelect } from '@shared/ui/form/FormSelect'
import { AfghanistanCities, defaultValues, GenderObj } from '../constant'
import { FormTextarea } from '@shared/ui/form/FormTextArea'
import { AddressModal, BusinessAddress } from './businessAddressModal'
import { schema } from '../schema'
import { FormData, OperatingHour } from '../types'
import {
  AddButton,
  DayTimeRow,
  ExpandableContent,
  ExpandableHeader,
  ExpandableSection,
  LinkText,
  PhotoIcon,
  PhotoInfo,
  ProfilePhoto,
  ProfilePhotoSection,
  SaveButton,
  UploadButton,
} from '../styles'
import { Details } from '@shared/ui/details/details'

const Ui = () => {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [operatingHoursOpen, setOperatingHoursOpen] = useState<boolean>(false)
  const [addressModalOpen, setAddressModalOpen] = useState<boolean>(false)
  const [businessAddress, setBusinessAddress] =
    useState<BusinessAddress | null>(null)
  const [operatingHours, setOperatingHours] = useState<OperatingHour[]>([
    { day: 'Monday', startTime: '09:00', endTime: '17:00' },
  ])

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const addOperatingHour = (): void => {
    setOperatingHours([
      ...operatingHours,
      { day: 'Monday', startTime: '09:00', endTime: '17:00' },
    ])
  }

  const removeOperatingHour = (index: number): void => {
    setOperatingHours(operatingHours.filter((_, i) => i !== index))
  }

  const updateOperatingHourDay = (index: number, day: string | null): void => {
    if (day) {
      const newHours = [...operatingHours]
      newHours[index].day = day
      setOperatingHours(newHours)
    }
  }

  const updateOperatingHourStartTime = (index: number, time: string): void => {
    const newHours = [...operatingHours]
    newHours[index].startTime = time
    setOperatingHours(newHours)
  }

  const updateOperatingHourEndTime = (index: number, time: string): void => {
    const newHours = [...operatingHours]
    newHours[index].endTime = time
    setOperatingHours(newHours)
  }

  const handleAddressSave = (data: BusinessAddress): void => {
    setBusinessAddress(data)
    setAddressModalOpen(false)
    console.log('Address saved:', data)
  }

  const onSubmit = (data: FormData): void => {
    console.log('Complete Form Data:', {
      ...data,
      operatingHours,
      businessAddress,
      profilePhoto: photoPreview,
    })
  }

  const daysOfWeek: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  return (
    <>
      <Flex
        p={40}
        direction="column"
        bg="background.8"
      >
        <ResText
          c="darkText"
          fontSize={24}
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
              fontSize={18}
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
                  fontSize={14}
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

            <Details
              title="Account details"
              icon={<FaRegEye style={{ marginTop: '2px', flexShrink: 0 }} />}
              text="This info appears on your profile profile"
            />

            <FormInput
              label="User name"
              control={control}
              name="username"
            />
            <FormInput
              label="Full name"
              control={control}
              name="fullName"
            />
            <FormInput
              label="Phone number"
              control={control}
              name="phoneNumber"
            />

            <FormSelect
              label="Provinces"
              name="province"
              placeholder="Select province"
              control={control}
              data={AfghanistanCities}
            />

            <FormInput
              label="Email address"
              control={control}
              name="emailAddress"
            />

            <FormTextarea
              label="Bio"
              control={control}
              name="bio"
            />
          </Stack>

          <Stack
            gap={3}
            mb={30}
          >
          
            <Details
              title="Private details"
              icon={
                <FaRegEyeSlash style={{ marginTop: '2px', flexShrink: 0 }} />
              }
              text="Only you can view this"
            />

            <FormInput
              label="Email"
              control={control}
              name="email"
              buttonTitle="Update"
              isButton={true}
            />

            <FormInput<FormData>
              control={control}
              name="mobileNumber"
              label="Mobile number"
              buttonTitle="Update"
              isButton={true}
            />

            <FormSelect
              label="Gender"
              name="gender"
              placeholder="Select Gender"
              control={control}
              data={GenderObj}
            />
          </Stack>

          <Stack
            gap={3}
            mb={30}
          >

            <Details
              title="Business details"
              icon={
                <FaInfoCircle style={{ marginTop: '2px', flexShrink: 0 }} />
              }
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

            <Stack style={{ marginTop: '20px' }}>
              <label>
                <ResText
                  fontSize={14}
                  c="darkText"
                >
                  Operating hours
                </ResText>
              </label>
              <ExpandableSection>
                <ExpandableHeader
                  onClick={() => setOperatingHoursOpen(!operatingHoursOpen)}
                >
                  <span>Operating hours</span>
                  <span>{operatingHoursOpen ? '▲' : '▼'}</span>
                </ExpandableHeader>
                <ExpandableContent isOpen={operatingHoursOpen}>
                  {operatingHours.map((hour, index) => (
                    <DayTimeRow key={index}>
                      <Select
                        data={daysOfWeek}
                        value={hour.day}
                        onChange={(value) =>
                          updateOperatingHourDay(index, value)
                        }
                        style={{ width: '150px' }}
                      />
                      <input
                        type="time"
                        value={hour.startTime}
                        onChange={(e) =>
                          updateOperatingHourStartTime(index, e.target.value)
                        }
                        style={{
                          padding: '8px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                        }}
                      />
                      <span>to</span>
                      <input
                        type="time"
                        value={hour.endTime}
                        onChange={(e) =>
                          updateOperatingHourEndTime(index, e.target.value)
                        }
                        style={{
                          padding: '8px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                        }}
                      />
                      {operatingHours.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeOperatingHour(index)}
                          style={{
                            padding: '8px 12px',
                            background: '#ff4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                          }}
                        >
                          Remove
                        </button>
                      )}
                    </DayTimeRow>
                  ))}
                  <MantineButton
                    onClick={addOperatingHour}
                    variant="outline"
                    size="sm"
                  >
                    Add More
                  </MantineButton>
                </ExpandableContent>
              </ExpandableSection>
            </Stack>

            <Stack
              gap={3}
              mb={30}
            >
              <label>
                <ResText
                  fontSize={14}
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
                  <div>{businessAddress.country}</div>
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
                  <FaPlus /> Add address
                </AddButton>
              )}
            </Stack>
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
