import { Stack, Text, Box } from '@mantine/core'
import { Paths } from '@shared/api/paths/paths'
import { Auth } from '@shared/authentication/auth'
import { SButton } from '@shared/styles'
import { useNavigate } from 'react-router-dom'
import { MdPhone } from 'react-icons/md'

interface ShowHideButtonProps {
  phone?: string
}

const ShowHideButton = ({ phone = '+93750179642' }: ShowHideButtonProps) => {
  const navigate = useNavigate()
  const { isAuth } = Auth()

  const maskPhone = (phoneNumber: string) => {
    const countryCode = phoneNumber.substring(0, 3)
    const lastDigits = phoneNumber.slice(-3)
    return `${countryCode} XXXXXX ${lastDigits}`
  }

  const formatPhoneDisplay = (phoneNumber: string) => {
    const cleaned = phoneNumber.replace(/[^\d+]/g, '')

    const countryCode = cleaned.substring(0, 3)
    const number = cleaned.substring(3, 12)

    return `${countryCode} ${number}`.trim()
  }

  const handleClick = () => {
    if (!isAuth) {
      navigate(Paths.Register)
      return
    }
    window.location.href = `tel:${phone}`
  }

  return (
    <Box style={{ position: 'relative' }}>
      <SButton
        size="lg"
        radius={3}
        onClick={handleClick}
        style={{ width: '100%' }}
        leftSection={<MdPhone size={18} />}
      >
        <Stack
          gap={2}
          justify="center"
          align="center"
        >
          <Text style={{ letterSpacing: '0.5px' }}>
            {isAuth ? formatPhoneDisplay(phone) : maskPhone(phone)}
          </Text>
        </Stack>
      </SButton>
    </Box>
  )
}

export { ShowHideButton }
