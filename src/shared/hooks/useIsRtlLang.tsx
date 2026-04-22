import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const RTL_LANGS = ['fa', 'ps']
interface dirType {
    dir: 'rtl' | 'ltr'
    textAlign: 'left' | 'right'
    isEnglish: boolean
}

export const useIsRtlLang = (): dirType => {
  const { i18n } = useTranslation()
  const [isRtl, setIsRtl] = useState<boolean>(
    RTL_LANGS.includes(i18n.language),
  )

  useEffect(() => {
    const handleLanguageChange = (lang: string) => {
      setIsRtl(RTL_LANGS.includes(lang))
    }
    i18n.on('languageChanged', handleLanguageChange)
    return () => i18n.off('languageChanged', handleLanguageChange)
  }, [i18n])
  
  return {'dir': isRtl ? 'ltr' : 'rtl', 'textAlign': isRtl ? 'right' : 'left', 'isEnglish': isRtl ? false : true}
}