import { useTranslation } from 'react-i18next'
import { CategoryConstants } from './constant'
import { Categorytype } from './types'

type TranslatedCategory = Omit<Categorytype, 'label'> & { label: string }

export const useCategories = (): {category: TranslatedCategory[]} => {
  const { t } = useTranslation()

  const category =  CategoryConstants.map((category) => ({
    ...category,
    label: t(category.label),
  }))
  return { category }
}