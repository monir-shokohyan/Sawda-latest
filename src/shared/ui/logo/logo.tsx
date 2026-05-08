import { Flex, Image } from '@mantine/core'
import { Auth } from '@shared/authentication/auth'
import { Responsive } from '@shared/hooks/responsive'
import { useNavigate } from 'react-router-dom'

const Ui = ({ parent }: { parent?: 'navbar' }) => {
  const { isMobile } = Responsive()
  const navigate = useNavigate()
  const { ToggleAuth } = Auth()
  const handleClick = () => {
    if (parent?.toLowerCase()?.startsWith('navbar')) {
      navigate('/')
      ToggleAuth()
    }
  }
  return (
    <Flex
      align="center"
      gap={4}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <Image
        src={'/Rite-eats.png'}
        h={isMobile ? '24px' : '25px'}
      />
    </Flex>
  )
}

export { Ui }
