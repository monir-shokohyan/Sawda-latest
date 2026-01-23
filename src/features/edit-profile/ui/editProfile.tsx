import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  MantineProvider,
  Modal,
  Select,
  Textarea,
  Button as MantineButton,
} from '@mantine/core'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FaUser, FaInfoCircle, FaPlus } from 'react-icons/fa'

// Types
interface Country {
  value: string
  label: string
}

interface City {
  value: string
  label: string
}

interface OperatingHour {
  day: string
  startTime: string
  endTime: string
}

interface FormData {
  username: string
  fullName: string
  phoneNumber: string
  marketPlace: string
  city: string
  emailAddress: string
  bio: string
  email: string
  mobileNumber: string
  gender: string
  companyName: string
  businessRegistrationNumber: string
  contactNumber: string
  website: string
  businessEmail: string
}

interface CountryApiResponse {
  cca2: string
  name: {
    common: string
  }
}

interface CityApiResponse {
  data: string[]
}

// Styled Components
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, sans-serif;
`

const Sidebar = styled.div`
  width: 250px;
  background-color: white;
  padding: 20px;
  border-right: 1px solid #e0e0e0;
`

const SidebarTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`

const SidebarItem = styled.div`
  padding: 10px 0;
  color: #666;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: #333;
  }
`

const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  max-width: 800px;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #333;
`

const Section = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`

const ProfilePhotoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`

const ProfilePhoto = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const PhotoIcon = styled(FaUser)`
  font-size: 40px;
  color: white;
`

const PhotoInfo = styled.div`
  flex: 1;
`

const PhotoTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #333;
`

const PhotoDescription = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
`

const UploadButton = styled.label`
  display: inline-block;
  padding: 8px 16px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  color: #333;

  &:hover {
    background-color: #f5f5f5;
  }

  input {
    display: none;
  }
`

const FormField = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

const InfoBox = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px;
  background-color: #f0f4ff;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 12px;
  color: #4a5568;
`

const CharCounter = styled.div`
  text-align: right;
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`

const ExpandableSection = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
`

const ExpandableHeader = styled.div`
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;

  &:hover {
    background-color: #f5f5f5;
  }
`

interface ExpandableContentProps {
  isOpen: boolean
}

const ExpandableContent = styled.div<ExpandableContentProps>`
  padding: 16px;
  border-top: 1px solid #ddd;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  color: #333;

  &:hover {
    background-color: #f5f5f5;
  }
`

const SaveButton = styled.button`
  padding: 10px 24px;
  background-color: #4263eb;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  float: right;

  &:hover {
    background-color: #3651d4;
  }
`

const LinkText = styled.span`
  color: #4263eb;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`

const UpdateButton = styled.button`
  padding: 6px 12px;
  background-color: white;
  color: #4263eb;
  border: 1px solid #4263eb;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #f0f4ff;
  }
`

const FlexRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`

const DayTimeRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
`

// Validation Schema
const schema = yup.object({
  username: yup.string().defined(),
  fullName: yup.string().defined(),
  phoneNumber: yup.string().defined(),
  marketPlace: yup.string().defined(),
  city: yup.string().defined(),
  emailAddress: yup.string().email('Invalid email').defined(),
  bio: yup.string().max(400, 'Bio must be 400 characters or less').defined(),
  email: yup.string().email('Invalid email').defined(),
  mobileNumber: yup.string().defined(),
  gender: yup.string().defined(),
  companyName: yup.string().defined(),
  businessRegistrationNumber: yup.string().defined(),
  contactNumber: yup.string().defined(),
  website: yup.string().url('Invalid URL').defined(),
  businessEmail: yup.string().email('Invalid email').defined(),
})

const ProfileEditForm: React.FC = () => {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [bioLength, setBioLength] = useState<number>(0)
  const [operatingHoursOpen, setOperatingHoursOpen] = useState<boolean>(false)
  const [addressModalOpen, setAddressModalOpen] = useState<boolean>(false)
  const [countries, setCountries] = useState<Country[]>([])
  const [cities, setCities] = useState<City[]>([])
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [operatingHours, setOperatingHours] = useState<OperatingHour[]>([
    { day: 'Monday', startTime: '09:00', endTime: '17:00' },
  ])

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: 'johndoe',
      fullName: 'John Doe',
      phoneNumber: '+256 700 000000',
      marketPlace: '',
      city: '',
      emailAddress: 'john@example.com',
      bio: 'Full stack developer passionate about creating amazing web applications.',
      email: 'john.private@example.com',
      mobileNumber: '+256 700 000000',
      gender: 'Male',
      companyName: 'Tech Solutions Ltd',
      businessRegistrationNumber: '12345678',
      contactNumber: '+256 700 000000',
      website: 'https://example.com',
      businessEmail: 'info@example.com',
    },
  })

  const bio = watch('bio')

  useEffect(() => {
    setBioLength(bio?.length || 0)
  }, [bio])

  useEffect(() => {
    fetchCountries()
  }, [])

  const fetchCountries = async (): Promise<void> => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all')
      const data: CountryApiResponse[] = await response.json()
      const countryList: Country[] = data
        .map((country) => ({
          value: country.cca2,
          label: country.name.common,
        }))
        .sort((a, b) => a.label.localeCompare(b.label))
      setCountries(countryList)
    } catch (error) {
      console.error('Error fetching countries:', error)
    }
  }

  const fetchCities = async (countryCode: string): Promise<void> => {
    try {
      const countryName = countries.find((c) => c.value === countryCode)?.label
      const response = await fetch(
        'https://countriesnow.space/api/v0.1/countries/cities',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ country: countryName }),
        },
      )
      const data: CityApiResponse = await response.json()
      const cityList: City[] = data.data.map((city) => ({
        value: city,
        label: city,
      }))
      setCities(cityList)
    } catch (error) {
      console.error('Error fetching cities:', error)
      setCities([])
    }
  }

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

  const handleCountryChange = (value: string | null): void => {
    if (value) {
      setSelectedCountry(value)
      setValue('marketPlace', value)
      setValue('city', '')
      fetchCities(value)
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

  const onSubmit = (data: FormData): void => {
    console.log('Form Data:', {
      ...data,
      operatingHours,
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
    <Container>
      <Sidebar>
        <SidebarItem>Edit profile</SidebarItem>
        <SidebarItem>Change password</SidebarItem>
        <SidebarItem>Notification</SidebarItem>
        <SidebarItem>Data and privacy</SidebarItem>
        <SidebarItem>Theme</SidebarItem>
      </Sidebar>

      <MainContent>
        <Title>Edit profile</Title>

        <div>
          <Section>
            <SectionTitle>profile photo</SectionTitle>

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
                <PhotoTitle>
                  Your favorite face picture as an important way for buyers and
                  sellers to learn about each part other.
                </PhotoTitle>
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

            <SectionTitle>Account details</SectionTitle>
            <InfoBox>
              <FaInfoCircle style={{ marginTop: '2px', flexShrink: 0 }} />
              <span>This info appears on your profile profile</span>
            </InfoBox>

            <FormField>
              <Label>User name</Label>
              <Controller
                name="username"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormField>

            <FormField>
              <Label>Full name</Label>
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormField>

            <FormField>
              <Label>Phone number</Label>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormField>

            <FormField>
              <Label>Market place</Label>
              <Controller
                name="marketPlace"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    data={countries}
                    placeholder="Select country"
                    searchable
                    onChange={handleCountryChange}
                    comboboxProps={{ transitionProps: { transition: 'fade-down', duration: 400 } }}
                  />
                )}
              />
            </FormField>

            <FormField>
              <Label>City</Label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    data={cities}
                    placeholder="Select city"
                    searchable
                    disabled={!selectedCountry}
                    comboboxProps={{ transitionProps: { transition: 'fade-down', duration: 400 } }}
                  />
                )}
              />
            </FormField>

            <FormField>
              <Label>Email address</Label>
              <Controller
                name="emailAddress"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormField>

            <FormField>
              <Label>Bio</Label>
              <Controller
                name="bio"
                control={control}
                render={({ field }) => (
                  <>
                    <Textarea
                      {...field}
                      minRows={4}
                      maxRows={6}
                    />
                    <CharCounter>{bioLength}/400</CharCounter>
                  </>
                )}
              />
            </FormField>
          </Section>

          <Section>
            <SectionTitle>Private details</SectionTitle>
            <InfoBox>
              <FaInfoCircle style={{ marginTop: '2px', flexShrink: 0 }} />
              <span>Only you can view this</span>
            </InfoBox>

            <FlexRow>
              <FormField style={{ flex: 1 }}>
                <Label>Email</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </FormField>
              <div style={{ paddingTop: '28px' }}>
                <UpdateButton type="button">Update</UpdateButton>
              </div>
            </FlexRow>

            <FlexRow>
              <FormField style={{ flex: 1 }}>
                <Label>Mobile number</Label>
                <Controller
                  name="mobileNumber"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </FormField>
              <div style={{ paddingTop: '28px' }}>
                <UpdateButton type="button">Update</UpdateButton>
              </div>
            </FlexRow>

            <FormField>
              <Label>Gender</Label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    data={[
                      { value: 'Male', label: 'Male' },
                      { value: 'Female', label: 'Female' },
                      { value: 'Others', label: 'Others' },
                    ]}
                    comboboxProps={{ transitionProps: { transition: 'fade-down', duration: 400 } }}
                  />
                )}
              />
            </FormField>
          </Section>

          <Section>
            <SectionTitle>Business details</SectionTitle>
            <InfoBox>
              <FaInfoCircle style={{ marginTop: '2px', flexShrink: 0 }} />
              <span>
                Buyers won't see this info unless you switch to a professional
                account. Professional accounts make it a lot easier for buyers
                to find you and they can tap into Info about you you can create
                a professional account.
              </span>
            </InfoBox>

            <FormField>
              <Label>Company name</Label>
              <Controller
                name="companyName"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormField>

            <FormField>
              <Label>Business registration number</Label>
              <Controller
                name="businessRegistrationNumber"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormField>

            <FormField>
              <Label>Contact number</Label>
              <Controller
                name="contactNumber"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormField>

            <FormField>
              <Label>Your website</Label>
              <Controller
                name="website"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="https://"
                  />
                )}
              />
            </FormField>

            <FormField>
              <Label>Business email</Label>
              <Controller
                name="businessEmail"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormField>

            <div style={{ fontSize: '13px', marginBottom: '12px' }}>
              Verify number to let buyers WhatsApp you.
            </div>
            <LinkText>Verify WhatsApp number now</LinkText>

            <FormField style={{ marginTop: '20px' }}>
              <Label>Operating hours</Label>
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
                        comboboxProps={{ transitionProps: { transition: 'fade-down', duration: 400 } }}
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
            </FormField>

            <FormField>
              <Label>Business address</Label>
              <AddButton
                type="button"
                onClick={() => setAddressModalOpen(true)}
              >
                <FaPlus /> Add address
              </AddButton>
            </FormField>
          </Section>

          <SaveButton
            type="button"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </SaveButton>
        </div>
      </MainContent>

      <Modal
        opened={addressModalOpen}
        onClose={() => setAddressModalOpen(false)}
        title="Add Business Address"
        size="md"
      >
        <FormField>
          <Label>Street Address</Label>
          <Input placeholder="Enter street address" />
        </FormField>
        <FormField>
          <Label>City</Label>
          <Input placeholder="Enter city" />
        </FormField>
        <FormField>
          <Label>State/Province</Label>
          <Input placeholder="Enter state/province" />
        </FormField>
        <FormField>
          <Label>Postal Code</Label>
          <Input placeholder="Enter postal code" />
        </FormField>
        <FormField>
          <Label>Country</Label>
          <Select
            data={countries}
            placeholder="Select country"
            searchable
            comboboxProps={{ transitionProps: { transition: 'fade-down', duration: 400 } }}
          />
        </FormField>
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
            onClick={() => setAddressModalOpen(false)}
          >
            Cancel
          </MantineButton>
          <MantineButton
            onClick={() => {
              console.log('Address saved')
              setAddressModalOpen(false)
            }}
          >
            Save Address
          </MantineButton>
        </div>
      </Modal>
    </Container>
  )
}

export { ProfileEditForm }
