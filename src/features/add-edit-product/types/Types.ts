import { ImageFile } from '@features/drag-and-drop/types'

export interface ProductsDetailsProps {
  DetailsObject: {
    title: string
    description: string | string[]
  }[]
  DetailsList: {
    title: string
  }[]
}
export interface RightSectionProps {
  images: ImageFile[]
  setImages: React.Dispatch<React.SetStateAction<ImageFile[]>>
}
