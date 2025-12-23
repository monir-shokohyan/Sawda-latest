import { CategoryCard } from '../styles'
import { Image, Text } from '@mantine/core'
import { CategoryTypeProps } from '../types'

const CardCategory = ({category}:CategoryTypeProps) => {
  return (
     <CategoryCard  shadow="sm" bg="surface" >
                  <Text size="sm"   fw={500} c="textPrimary" mb="md" lineClamp={2} style={{zIndex: 9, textAlign:'start', fontWeight: 'bolder'}}>
                    {category.name}
                  </Text>
                  <Image
                    src={category.image}
                    alt={category.name}
                    h="80px"
                    w="80px"
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

export  { CardCategory }
