import * as yup from 'yup'

export const schema = yup.object({
  interest: yup.boolean().required(),

  location: yup.boolean().required(),

  demographic: yup.boolean().required(),
})
