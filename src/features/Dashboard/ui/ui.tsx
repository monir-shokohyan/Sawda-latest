import { SearchFilter } from "@features/search-filter/ui";
import { Button, Flex } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks";
import { MdOutlineManageSearch } from "react-icons/md";

function Ui() {
    const isMobile = useMediaQuery('(max-width: 768px)')
  
  return (
    <Flex w="100%">
      <Flex py="xl" px="md" gap={isMobile ? 10 : 20} w="100%" justify="center" >
        { !isMobile && <Button size="md" p={15} > <MdOutlineManageSearch size={20}/></Button> }    
        <SearchFilter />
      </Flex>
    </Flex>
  )
}

export { Ui }
