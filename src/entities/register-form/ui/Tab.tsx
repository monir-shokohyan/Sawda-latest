import { Tabs, TabsProps } from '@mantine/core'
import styled from 'styled-components'
import { TabType } from '../types'
import { useSwipeable } from 'react-swipeable';
interface LeftTabProps {
  filter: TabType
  handleChange: (value: string | null) => void
  toggle: () => void

}

const HovTabs = styled(Tabs)<TabsProps>`
  .mantine-Tabs-tab:hover {
    background-color: transparent;
  }

  .mantine-Tabs-tab {
    transition: all 0.2s ease-in-out;
  }

  .mantine-Tabs-list {
    position: relative;
  }
`

const RegisterTab = ({
  filter,
  handleChange,
  toggle,
}: LeftTabProps) => {
    const handler = useSwipeable({
        onSwipedLeft: () => {
            toggle()
        },
        onSwipedRight: () => {
            toggle()
        },
    
    })
    
  return (
    <div
    {...handler}
    > 
    <HovTabs value={filter} onChange={handleChange}>
        <Tabs.List grow>
          <Tabs.Tab value="email">Email</Tabs.Tab>
          <Tabs.Tab value="phone">Phone number</Tabs.Tab>
        </Tabs.List>
      </HovTabs>
    </div>
  )
}

export { RegisterTab }
