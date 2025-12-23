import { Flex, ScrollArea } from '@mantine/core'
import { UiProps } from '../types'
import { categories } from '../constant'
import { CardCategory } from './card'

const Ui = ({ isMobile, minNum = 1, maxNum = 2 }: UiProps) => {
  const filteredCategories = categories.filter((category) => {
    return category.id >= minNum && category.id <= maxNum
  })

  return (
    <>
      {isMobile ? (
        <ScrollArea
          type="never"
          scrollbarSize={0}
          offsetScrollbars
        >
          <Flex
            gap="sm"
            py="sm"
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
        </ScrollArea>
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
