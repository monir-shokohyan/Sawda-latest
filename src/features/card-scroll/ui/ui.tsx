import { Flex, ScrollArea } from '@mantine/core'
import { UiProps } from '../types'
import { CardCategory } from './card'
import { CategoryConstants } from '@shared/ui/category/constant'

const Ui = ({ isMobile, minNum = 1, maxNum = 2 }: UiProps) => {
  const filteredCategories = CategoryConstants.filter((category) => {
    return category!.id >= minNum && category.id <= maxNum
  })

  return (
    <>
      {isMobile ? (
        <ScrollArea
          type="never"
          scrollbarSize={0}
          offsetScrollbars
          scrollbars="x"
        >
          <Flex
            gap="sm"
            py="sm"
            pr="sm"
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
