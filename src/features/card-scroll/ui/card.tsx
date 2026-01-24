import { CategoryCard } from '../styles'
import { Image } from '@mantine/core'
import { CategoryTypeProps } from '../types'
import { SText } from '@shared/styles'
import { useNavigate } from 'react-router-dom'
import { Paths } from '@shared/api/paths/paths'

const CardCategory = ({ category, isMobile }: CategoryTypeProps) => {
  const navigate = useNavigate()
  return (
    <CategoryCard
      shadow="sm"
      bg="background.7"
      $isMobile={isMobile}
      onClick={() => navigate(`${Paths.Search}monir?category=${category.id}`)}
    >
      <SText
        size={isMobile ? '0.7rem' : 'sm'}
        fw={500}
        c="StextPrimary"
        mb="md"
        lineClamp={2}
      >
        {category.name}
      </SText>
      <Image
        src={category.image}
        alt={category.name}
        h={isMobile ? '45px' : '80px'}
        w={isMobile ? '45px' : '80px'}
        fit="contain"
        mx="auto"
        style={{
          position: 'absolute',
          bottom: '0px',
          right: '0px',
          zIndex: 1,
          opacity: 0.8,
        }}
      />
    </CategoryCard>
  )
}

export { CardCategory }
