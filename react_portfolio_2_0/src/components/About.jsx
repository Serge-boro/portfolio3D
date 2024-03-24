import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.dev>
        <p className={styles.sectionSubText}>Intraduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.dev>
    </>
  )
}

export default About
