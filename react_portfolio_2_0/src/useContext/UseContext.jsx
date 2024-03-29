import { useContext, createContext, useState } from 'react'

const ContextProvider = createContext()

export const UseContext = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [rotation, setRotation] = useState(false)

  const rotationMain = () => {
    const rotTimeout = setTimeout(() => {
      setRotation(true)
    }, 500)
    return () => clearTimeout(rotTimeout)
  }

  return (
    <ContextProvider.Provider
      value={{ isMobile, setIsMobile, rotation, setRotation, rotationMain }}
    >
      {children}
    </ContextProvider.Provider>
  )
}

export const useContextProvider = () => {
  return useContext(ContextProvider)
}
