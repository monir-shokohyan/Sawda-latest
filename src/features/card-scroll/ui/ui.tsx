import { Flex } from '@mantine/core'
import { UiProps } from '../types'
import { CardCategory } from './card'
import { Carousel } from '@mantine/carousel'
import { useCategories } from '@shared/ui/category/useCategory'

const Ui = ({ isMobile, minNum = 1, maxNum = 2 }: UiProps) => {
  const { category } = useCategories()
  const filteredCategories = category.filter((category) => {
    return category!.id >= minNum && category.id <= maxNum
  })

  return (
    <>
      {isMobile ? (
        <Carousel
          withIndicators={false}
          withControls={false}
          slideSize="25%"
          slideGap="sm"
          draggable
          py={6}
          styles={{
            container: { alignItems: 'stretch' },
          }}
          emblaOptions={{ dragFree: true, align: 'start' }}
        >
          {filteredCategories.map((categoryM) => (
            <Carousel.Slide
              key={categoryM.id}
              style={{ height: 'auto' }}
            >
              <CardCategory
                category={categoryM}
                isMobile={isMobile}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <Flex
          gap="sm"
          justify="center"
          wrap="wrap"
          pt="sm"
          px="sm"
        >
          {filteredCategories.map((category) => (
            <CardCategory
              key={category.id}
              category={category}
              isMobile={isMobile}
            />
          ))}
        </Flex>
      )}
    </>
  )
}

export { Ui }
