import React from 'react'
import { BallCanvas } from './canvas'
import { footers } from '../constants'
import { useContextProvider } from '../useContext/UseContext'

const Footer = () => {
  const { isMobile } = useContextProvider()
  return (
    <div className='h-[75px] bg-transparent flex items-center justify-center mt-[-25px]'>
      <div
        className={`${isMobile ? 'flex' : 'flex justify-between w-[350px]'}`}
      >
        {footers.map((tech, idx) => (
          <div className={`w-16 h-16 ${isMobile && 'w-9 h-9 ml-5'}`} key={idx}>
            <BallCanvas {...tech} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer
