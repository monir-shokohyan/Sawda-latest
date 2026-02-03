import { useRef, useState } from 'react'
import { useMantineColorScheme, useMantineTheme } from '@mantine/core'
import { Responsive } from '@shared/hooks/responsive'
import imageCompression from 'browser-image-compression'
import { FileWithPath } from '@mantine/dropzone'
import { ImageFile } from '../types'

interface UseDropDownProps {
  images: ImageFile[]
  setImages: React.Dispatch<React.SetStateAction<ImageFile[]>>
}

export const useDropDown = ({ images, setImages }: UseDropDownProps) => {
  const { isMobile } = Responsive()
  const theme = useMantineTheme()
  const openRef = useRef<() => void>(null)
  const [isCompressing, setIsCompressing] = useState(false)
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  
    const isDark = colorScheme === 'dark'
  

  const handleDrop = async (files: FileWithPath[]) => {
    setIsCompressing(true)

    try {
      const newImages: ImageFile[] = await Promise.all(
        files.map(async (file) => {
          const originalSize = file.size

          const compressedFile = await imageCompression(file, {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
            fileType: file.type,
          })

          return {
            file: compressedFile,
            preview: URL.createObjectURL(compressedFile),
            id: `${Date.now()}-${Math.random()}`,
            originalSize,
            compressedSize: compressedFile.size,
            status: 'completed' as const,
          }
        }),
      )

      setImages((prev) => [...prev, ...newImages])
    } catch (error) {
      console.error('Error compressing images:', error)
    } finally {
      setIsCompressing(false)
    }
  }

  const removeImage = (id: string) => {
    setImages((prev) => {
      const image = prev.find((img) => img.id === id)
      if (image) {
        URL.revokeObjectURL(image.preview)
      }
      return prev.filter((img) => img.id !== id)
    })
  }

  const updateImage = async (id: string, newPreview: string) => {
    try {
      // Convert base64 to blob
      const response = await fetch(newPreview)
      const blob = await response.blob()

      setImages((prev) =>
        prev.map((img) => {
          if (img.id === id) {
            // Revoke old preview URL
            URL.revokeObjectURL(img.preview)

            // Create new file from blob
            const newFile = new File([blob], img.file.name, {
              type: img.file.type,
              lastModified: Date.now(),
            })

            return {
              ...img,
              file: newFile,
              preview: newPreview,
              compressedSize: blob.size,
            }
          }
          return img
        }),
      )
    } catch (error) {
      console.error('Error updating image:', error)
    }
  }
  const [editingImage, setEditingImage] = useState<{
    id: string
    src: string
    name: string
  } | null>(null)

  const handleSaveEdit = (id: string) => (editedImageSrc: string) => {
    updateImage(id, editedImageSrc)
    setEditingImage(null)
  }
  return {
    editingImage,
    setEditingImage,
    handleSaveEdit,
    isMobile,
    theme,
    openRef,
    isCompressing,
    handleDrop,
    removeImage,
    isDark
  }
}
