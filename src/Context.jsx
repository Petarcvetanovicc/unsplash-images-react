import { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

const AppContext = createContext()
export const useGlobalContext = () => useContext(AppContext)

const getDarkTheme = () => {
  const darkTheme = localStorage.getItem('dark-theme')

  if (darkTheme !== null) {
    const dark = JSON.parse(darkTheme)
    return dark
  }

  return false
}

const AppProvider = ({ children }) => {
  const [text, setText] = useState('cat')
  const [darkTheme, setDarkTheme] = useState(getDarkTheme())

  const changeTheme = () => {
    document.body.classList.toggle('dark-theme', darkTheme)
    localStorage.setItem('dark-theme', JSON.stringify(darkTheme))
  }

  useEffect(() => {
    changeTheme()
    getDarkTheme()
  }, [darkTheme])

  return (
    <AppContext.Provider value={{ text, setText, darkTheme, setDarkTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
