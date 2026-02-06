import * as yup from 'yup'

export const schema = yup.object({
  rate: yup
    .number()
    .min(1, 'Please select a rating')
    .max(5, 'Rating cannot exceed 5')
    .required('Rating is required'),

  review: yup
    .string()
    .trim()
    .min(10, 'Review must be at least 10 characters')
    .max(1200, 'Review is too long (max 1200 characters)')
    .required('Please write your review'),
})
