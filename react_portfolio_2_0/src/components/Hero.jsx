import { useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 h-40 violet-gradient sm:h-80'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I'm <span className='text-[#915eff]'>Serhii</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interface and web application
          </p>
        </div>
      </div>

      <ComputersCanvas isMobile={isMobile} setIsMobile={setIsMobile} />

      {/* oval after computer */}
      <div
        className={`absolute xs:bottom-12 bottom-35 w-full flex justify-center items-center ${
          isMobile && 'relative bottom-60'
        }`}
      >
        <a href='#about'>
          <div
            className={`w-[32px] h-[55px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2
              ${isMobile && 'w-[24px] h-[38px] border-2'}`}
          >
            {/* inside pong */}
            <motion.dev
              animate={isMobile ? { y: [0, 10, 0] } : { y: [0, 25, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-2.5 h-2.5 rounded-full bg-secondary mb-1'
            />
            {/* inside pong */}
          </div>
        </a>
      </div>
      {/* oval after computer */}
    </section>
  )
}

export default Hero
