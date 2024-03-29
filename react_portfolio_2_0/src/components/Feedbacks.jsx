import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import { useContextProvider } from '../useContext/UseContext'

const FeedbacksCard = ({
  idx,
  testimonial,
  name,
  designation,
  company,
  image,
  link,
  isMobile,
}) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', idx * 0.5, 0.75)}
      className={`bg-black-200 p-10 rounded-3xl sm:w-[320px] w-full ${
        isMobile && 'mt-[-70px]'
      }`}
    >
      <p className='text-white font-black text-[48px]'>"</p>
      <div className='mt-1'>
        <p
          className={`text-white tracking-wider text-[18px] ${
            isMobile && 'text-[13px]'
          }`}
        >
          {testimonial}
        </p>
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>
          <a href={link} target='_blank'>
            <img
              src={image}
              alt={`feetback-by-${name}`}
              className='w-10 h-10 rounded-full object-cover'
            />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Feedbacks = () => {
  const { isMobile } = useContextProvider()
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pd-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimon, idx) => (
          <FeedbacksCard
            key={`tesimon-${idx}`}
            idx={idx}
            {...testimon}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')
