import * as yup from 'yup'
import { schema } from '../schema'

export type RegisterType = yup.InferType<typeof schema>
export type TabType = 'email' | 'phone'
