import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'
import { useContextProvider } from '../useContext/UseContext'

const ServiceCard = ({ title, icon, idx, isMobile }) => {
  return (
    <Tilt className='xs:w-[280px] w-full'>
      <motion.nav
        variants={fadeIn('right', 'spring', 0.5 * idx, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ${
            isMobile && 'min-h-[200px]'
          }`}
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img
            src={icon}
            alt='title'
            className={`w-16 h-16 object-contain ${isMobile && 'w-12'}`}
          />
          <h3
            className={`text-white text-[20px] fon ${
              isMobile && 'text-[15px]'
            }`}
          >
            {title}
          </h3>
        </div>
      </motion.nav>
    </Tilt>
  )
}

const About = () => {
  const { isMobile } = useContextProvider()
  return (
    <>
      <motion.nav variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${isMobile && 'text-[14px]'}`}>
          Intraduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.nav>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ${
          isMobile && 'text-[12.5px]'
        }`}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aut
        impedit error dignissimos, tempore atque. Officia minus excepturi
        voluptates veniam qui harum dolorem numquam incidunt ipsum eligendi
        tempora corporis vel sint porro laborum, voluptatum maiores expedita
        optio nemo nostrum delectus.
      </motion.p>
      <div
        className={`mt-20 flex flex-wrap gap-10 justify-evenly items-center ${
          isMobile && 'mt-10 gap-8 m-10'
        }`}
      >
        {services.map((item, idx) => {
          return (
            <ServiceCard
              key={item.title}
              idx={idx}
              {...item}
              isMobile={isMobile}
            />
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
