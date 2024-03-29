import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { useContextProvider } from '../useContext/UseContext'

const ExperienceCard = ({ exp }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={exp.date}
    iconStyle={{ background: exp.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={exp.icon}
          alt='exp.company_name'
          className='w-[60px] h-[60px] rounded-full object-cover'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[20px] font-bold'>{exp.title}</h3>
      <p className='text-secondary text-[16px] font-semibold'>
        {exp.company_name}
      </p>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {exp.points.map((point, idx) => (
          <li
            key={`expirience-point${idx}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  const { isMobile } = useContextProvider()
  return (
    <>
      <motion.nav variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${isMobile && 'text-[14px]'}`}>
          What I have done so far
        </p>
        <h2
          className={`${styles.sectionHeadText} ${isMobile && 'text-[18px]'}`}
        >
          Work Experience
        </h2>
      </motion.nav>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((exp, idx) => {
            return <ExperienceCard key={idx} exp={exp} />
          })}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
