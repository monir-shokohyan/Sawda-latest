import * as yup from 'yup'
import { schema } from '../schema'

export type OtpType = yup.InferType<typeof schema>
