export interface ImageFile {
  file: File
  preview: string
  id: string
  originalSize: number
  compressedSize: number
  status: 'uploading' | 'completed'
}

export interface DragAndDropProps {
  images: ImageFile[]
  setImages: React.Dispatch<React.SetStateAction<ImageFile[]>>
  maxFiles?: number
  maxSize?: number
}

export interface Point {
  x: number
  y: number
}

export interface ImageEditorProps {
  opened: boolean
  onClose: () => void
  imageSrc: string
  onSave: (editedImage: string) => void
  fileName: string
}
