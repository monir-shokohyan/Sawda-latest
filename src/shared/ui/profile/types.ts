import { ReactElement } from 'react'

export interface Profiletype {
  label: string
  icon: ReactElement
  handleClick?: () => void
}
