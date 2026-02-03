import * as yup from 'yup'

export const schema = yup.object({
  message: yup
    .string()
    .trim()
    .required('Please write your message')
    .min(2, 'Message is too short')
    .max(1000, 'Message is too long (max 1000 characters)'),
})
