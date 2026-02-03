import * as yup from 'yup'
import { schema } from '../schema'

export type ReplyFormType = yup.InferType<typeof schema>
