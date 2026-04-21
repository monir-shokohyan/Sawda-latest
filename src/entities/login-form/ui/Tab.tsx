import { Tabs, TabsProps } from '@mantine/core'
import styled from 'styled-components'
import { TabType } from '../types'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  return (
    <HovTabs
      value={filter}
      onChange={handleChange}
    >
      <Tabs.List grow>
        <Tabs.Tab value="email">{t('auth.email')}</Tabs.Tab>
        <Tabs.Tab value="phone">{t('auth.phoneNumber')}</Tabs.Tab>
      </Tabs.List>
    </HovTabs>
  )
}

export { LoginTab }
