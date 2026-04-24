import { FaClock } from 'react-icons/fa'
import { TbClockOff } from 'react-icons/tb'

const NewestToOldestObj = [
  {
    label: 'Newest',
    icon: FaClock,
    value: 'newest',
  },
  {
    label: 'Oldest',
    icon: TbClockOff,
    value: 'oldest',
  },
]

const GenderObj = [
  { value: 'Male', label: 'gender.male' },
  { value: 'Female', label: 'gender.female' },
  { value: 'Others', label: 'gender.other' },
] as const

const defaultValues = {
  username: 'johndoe',
  fullName: 'John Doe',
  phoneNumber: '+256 700 000000',
  province: '',
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
}
const ModalDefaultValue = {
  streetAddress: '',
  city: '',
  stateProvince: '',
  postalCode: '',
  country: '',
}

export { NewestToOldestObj, GenderObj, defaultValues, ModalDefaultValue }
