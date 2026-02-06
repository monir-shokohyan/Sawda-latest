import { Tabs, TabsProps } from '@mantine/core'
import styled from 'styled-components'
import { TabType } from '../types'

interface LeftTabProps {
  filter: TabType
  handleChange: (value: string | null) => void
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

const LoginTab = ({ filter, handleChange }: LeftTabProps) => {
  return (
    <HovTabs
      value={filter}
      onChange={handleChange}
    >
      <Tabs.List grow>
        <Tabs.Tab value="email">Email</Tabs.Tab>
        <Tabs.Tab value="phone">Phone number</Tabs.Tab>
      </Tabs.List>
    </HovTabs>
  )
}

export { LoginTab }
