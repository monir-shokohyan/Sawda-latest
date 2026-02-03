import React, { useState } from 'react'
import { BusinessAddress, FormData } from '../types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema'
import { defaultValues } from '../constant'
import { Responsive } from '@shared/hooks/responsive'

const useManageEditProfile = () => {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [addressModalOpen, setAddressModalOpen] = useState<boolean>(false)
  const [businessAddress, setBusinessAddress] =
    useState<BusinessAddress | null>(null)

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const { isMobile } = Responsive()

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddressSave = (data: BusinessAddress): void => {
    console.log(data)

    setBusinessAddress(data)
    setAddressModalOpen(false)
    console.log('Address saved:', data)
  }

  const onSubmit = (data: FormData): void => {
    console.log('Complete Form Data:', {
      ...data,
      businessAddress,
      profilePhoto: photoPreview,
    })
  }

  return {
    handleAddressSave,
    handlePhotoUpload,
    handleSubmit,
    photoPreview,
    control,
    addressModalOpen,
    businessAddress,
    onSubmit,
    setAddressModalOpen,
    isMobile,
  }
}

export { useManageEditProfile }
