import * as yup from 'yup'

export const schema = yup.object({
  otp: yup
    .string()
    .trim()
    .length(4, 'OTP must be 4 digits')
    .required() 
})
