import * as yup from 'yup'

export const schema = yup.object({
  username: yup
    .string()
    .trim()
    .min(8, 'At least 6 characters')
    .required('Username is required'),
  email: yup
    .string()
    .trim()
    .email('Invalid email format')
    .required('Email is required'),

  password: yup
    .string()
    .trim()
    .min(8, 'At least 8 characters')
    .required('Password is required'),

  confirm_password: yup
    .string()
    .trim()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  phoneNumber: yup
    .string()
    .trim()
    .required('Please enter a valid Afghan phone number (e.g., +93 XXX XXXXXX)')
    .matches(
      /^(\+93)?[7][0-9]{8}$/,
      'Please enter a valid Afghan phone number (e.g., +93 XXX XXXXXX)',
    ),
})
