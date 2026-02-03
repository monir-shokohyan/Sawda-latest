import * as yup from 'yup'

export const schema = yup.object({
  email: yup.boolean().required(),

  pushNotification: yup.boolean().required(),

  sawdaEmail: yup.boolean().required(),

  sawdaPushNotification: yup.boolean().required(),

  sms: yup.boolean().required(),
})
