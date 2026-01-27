import { ReactElement } from 'react'

export interface Categorytype {
  id: number
  image?: string
  label: string
  icon: ReactElement
  value: string
}
