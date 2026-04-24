import { ReactElement } from 'react'

export interface Profiletype {
  label: string
  id: string
  icon: ReactElement
  handleClick?: () => void
  path?: string
}
