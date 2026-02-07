import * as yup from 'yup'

export const schema = yup.object({
  category: yup.string().default(''),
  province: yup.string().default(''),
  district: yup.string().default(''),
  currency: yup.string().default(''),
  priceFrom: yup
    .number()
    .default(0)
    .transform((value, originalValue) => (originalValue === '' ? 0 : value))
    .min(0, 'Price cannot be negative')
    .nullable(),
  priceTo: yup
    .number()
    .default(0)
    .transform((value, originalValue) => (originalValue === '' ? 0 : value))
    .min(0, 'Price cannot be negative')
    .nullable(),
})
