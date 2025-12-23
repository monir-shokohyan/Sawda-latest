export interface CategoryType {
  id: number
  name: string
  image: string
}

export interface CategoryTypeProps {
  category: CategoryType
  isMobile: boolean
}

export interface UiProps {
  isMobile: boolean
  minNum: number
  maxNum: number
}
