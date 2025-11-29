import { ReactNode } from 'react'

export interface RouteType {
  key: string
  path: string
  element?: ReactNode
  withoutLayout?: boolean
  loader?: ReactNode
  children?: RouteType[]
  guarded?: string | string[]
}
