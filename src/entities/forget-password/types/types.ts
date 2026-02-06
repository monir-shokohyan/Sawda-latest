import * as yup from 'yup'
import { schema } from '../schema'

export type ForgetType = yup.InferType<typeof schema>
export type TabType = 'email' | 'phone'
