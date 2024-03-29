import { useContext, createContext, useState } from 'react'

const ContextProvider = createContext()

export const UseContext = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <ContextProvider.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </ContextProvider.Provider>
  )
}

export const useContextProvider = () => {
  return useContext(ContextProvider)
}
