import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'

import { logo, menu, close } from '../assets'
import { useContextProvider } from '../useContext/UseContext'

const Navbar = () => {
  const { rotationMain } = useContextProvider()
  const [activeTitle, setActiveTitle] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActiveTitle('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Serhii &nbsp;
            <span className='sm:block hidden'>| JS Developer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                activeTitle === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActiveTitle(link.title), rotationMain()
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* sm means after small display */}
        <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer max-w-[25px] h-[20px]'>
          <img
            src={!toggle ? menu : close}
            alt='menu'
            className='w-[28px].h-[28px].object-contain.cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4 '>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    activeTitle === link.title ? 'text-white' : 'text-secondary'
                  } hover:text-white font-poppins font-medium cursor-pointer text-[14px]`}
                  onClick={() => {
                    setActiveTitle(link.title)
                    setToggle(!toggle)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
