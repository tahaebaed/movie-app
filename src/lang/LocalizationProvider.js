import local_en from './en.json'
import local_ar from './ar.json'
import local_fr from './fr.json'
import React, { createContext, useState } from 'react'
import { createIntl, IntlProvider, createIntlCache } from 'react-intl'

export const LocaleContext = createContext()

const messages = {
  en: local_en,
  ar: local_ar,
  fr: local_fr,
}

const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState(localStorage.getItem('lang'))

  const cache = createIntlCache()
  const intel = createIntl(
    {
      locale: locale,
      messages: messages[locale],
    },
    cache
  )
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={intel.locale} messages={intel.messages}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  )
}

export default LocalizationProvider
