import * as yup from 'yup'

export const schema = yup.object({
  username: yup.string().defined(),
  fullName: yup.string().defined(),
  phoneNumber: yup.string().defined(),
  province: yup.string().defined(),
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
export const AddressSchema = yup.object({
  streetAddress: yup.string().required('Street address is required'),
  city: yup.string().required('City is required'),
  stateProvince: yup.string().required('State/Province is required'),
  postalCode: yup.string().required('Postal code is required'),
  country: yup.string().required('Country is required'),
})
