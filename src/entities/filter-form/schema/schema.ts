import * as yup from 'yup'

export const schema = yup.object({
  category: yup.string().defined(),
  province: yup.string().defined(),
  district: yup.string().defined(),
  currency: yup.string().defined(),
  priceFrom: yup.number().defined().positive('Price must be positive'),
  priceTo: yup.number().defined().positive('Price must be positive'),
})
