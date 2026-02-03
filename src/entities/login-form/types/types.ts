import * as yup from 'yup'
import { schema } from '../schema'

export type loginType = yup.InferType<typeof schema>
