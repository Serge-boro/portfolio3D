import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { useContextProvider } from '../useContext/UseContext'

const Hero = () => {
  const { isMobile, setIsMobile, rotation, rotationMain } = useContextProvider()
  return (
    <section className='relative w-full h-screen mx-auto '>
      <img
        src='https://img1.picmix.com/output/stamp/normal/3/9/6/7/2387693_e8061.gif'
        className={`${
          isMobile
            ? 'absolute w-[100px] h-[100px] mt-[330px] ml-[50px]'
            : 'absolute w-[200px] h-[200px] mt-52 ml-28'
        }`}
      />
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
            I develop user interface <br className='sm:block hidden' />
            and web application
          </p>
        </div>
      </div>

      <ComputersCanvas
        isMobile={isMobile}
        setIsMobile={setIsMobile}
        rotation={rotation}
      />

      {/* oval after computer */}
      <div
        className={`absolute xs:bottom-12 bottom-35 w-full flex justify-center items-center ${
          isMobile && 'relative bottom-60'
        }`}
        onClick={!isMobile && rotationMain}
      >
        <a href='#about'>
          <div
            className={`w-[32px] h-[55px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2
              ${isMobile && 'w-[24px] h-[38px] border-2'}`}
          >
            {/* inside pong */}
            <motion.nav
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
