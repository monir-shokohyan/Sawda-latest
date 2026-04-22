import { Content } from '@shared/ui/content'
import { SearchWidget } from '@widgets/search'
import { useTranslation } from 'react-i18next'

export const Page = () => {
  const { t } = useTranslation()
  return (
    <Content title={t('common.search')}>
      <SearchWidget />
    </Content>
  )
}
