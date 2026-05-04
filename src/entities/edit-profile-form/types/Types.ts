export interface ExpandableContentProps {
  isOpen: boolean
}
export interface OperatingHour {
  day: string
  startTime: string
  endTime: string
}

export interface FormData {
  username: string
  fullName: string
  phoneNumber: string
  province: string
  emailAddress: string
  bio: string
  email: string
  mobileNumber: string
  gender: string
  companyName: string
  businessRegistrationNumber: string
  contactNumber: string
  website: string
  businessEmail: string
}

export interface BusinessAddress {
  streetAddress: string
  city: string
  stateProvince: string
  postalCode: any
}
export interface AddressModalProps {
  opened: boolean
  onClose: () => void
  onSave: (data: BusinessAddress) => void
  initialData?: BusinessAddress | null
}
