import { Categorytype } from '@shared/ui/category/types'

export interface CategoryTypeProps {
  category: Categorytype
  isMobile: boolean
}

export interface UiProps {
  isMobile: boolean
  minNum: number
  maxNum: number
}
