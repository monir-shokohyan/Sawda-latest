import * as yup from 'yup'

export const schema = yup.object({
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

  remember: yup.boolean().defined(),
})
