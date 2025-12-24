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
export interface Product {
  id: number
  username: string
  timestamp: string
  title: string
  price: string
  originalPrice: string
  status: string
  liked: boolean
}
