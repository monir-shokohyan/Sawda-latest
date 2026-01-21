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

const AfghanistanCities = [
  { value: 'Kabul', label: 'Kabul' },
  { value: 'Herat', label: 'Herat' },
  { value: 'Mazar-i-Sharif', label: 'Mazar-i-Sharif' },
  { value: 'Kandahar', label: 'Kandahar' },
  { value: 'Jalalabad', label: 'Jalalabad' },
  { value: 'Kunduz', label: 'Kunduz' },
  { value: 'Gardez', label: 'Gardez' },
  { value: 'Ghazni', label: 'Ghazni' },
  { value: 'Lashkargah', label: 'Lashkargah' },
  { value: 'Fayzabad', label: 'Fayzabad' },
  { value: 'Asadabad', label: 'Asadabad' },
  { value: 'Qala-e-Naw', label: 'Qala-e-Naw' },
  { value: 'Pul-e-Khumri', label: 'Pul-e-Khumri' },
  { value: 'Bamyan', label: 'Bamyan' },
  { value: 'Maymana', label: 'Maymana' },
  { value: 'Sheberghan', label: 'Sheberghan' },
  { value: 'Mehtar Lam', label: 'Mehtar Lam' },
  { value: 'Mahmud-i-Raqi', label: 'Mahmud-i-Raqi' },
  { value: 'Zaranj', label: 'Zaranj' },
  { value: 'Charikar', label: 'Charikar' },
  { value: 'Nili', label: 'Nili' },
  { value: 'Chaghcharan', label: 'Chaghcharan' },
  { value: 'Taloqan', label: 'Taloqan' },
  { value: 'Qalat', label: 'Qalat' },
  { value: 'Tarinkot', label: 'Tarinkot' },
  { value: 'Khost', label: 'Khost' },
  { value: 'Parun', label: 'Parun' },
  { value: 'Sharana', label: 'Sharana' },
  { value: 'Puli Alam', label: 'Puli Alam' },
]
const GenderObj = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Others', label: 'Others' },
]

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

export {
  NewestToOldestObj,
  AfghanistanCities,
  GenderObj,
  defaultValues,
  ModalDefaultValue,
}
