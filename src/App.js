import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Index from './pages/Index'
import { useContext } from 'react'
import { LocaleContext } from './lang/LocalizationProvider'

function App() {
  const { locale } = useContext(LocaleContext)
  return (
    <div className='App' dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <Index />
    </div>
  )
}

export default App
