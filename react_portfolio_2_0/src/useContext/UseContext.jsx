import { useContext, createContext, useState } from 'react'
import { UAParser } from 'ua-parser-js'

const ContextProvider = createContext()

export const UseContext = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [rotation, setRotation] = useState(false)

  const parser = new UAParser()
  const checkMobile = parser.getResult().device.type

  const rotationMain = () => {
    const rotTimeout = setTimeout(() => {
      setRotation(true)
    }, 500)
    return () => clearTimeout(rotTimeout)
  }

  return (
    <ContextProvider.Provider
      value={{
        isMobile,
        setIsMobile,
        rotation,
        setRotation,
        rotationMain,
        checkMobile,
      }}
    >
      {children}
    </ContextProvider.Provider>
  )
}

export const useContextProvider = () => {
  return useContext(ContextProvider)
}
