import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { useContextProvider } from '../useContext/UseContext'

const ProjectCard = ({
  idx,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
  isMobile,
}) => {
  return (
    // <Tilt className='xs:w-[280px] w-full'>
    <motion.div variants={fadeIn('up', 'spring', idx * 0.5, 0.75)}>
      <Tilt
        className='xs:w-[360px] w-full bg-tertiary p-5 rounded-2xl'
        points={{ max: 45, scale: 1, speed: 450 }}
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 cart-img_hover'>
            {source_code_link && (
              <div
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-1'
                onClick={() => window.open(source_code_link, '_blank')}
              >
                <img
                  src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'
                  alt='github'
                  className='w-10 h-10 rounded-full object-cover bg-white'
                />
              </div>
            )}
            {project_link && (
              <div
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                onClick={() => window.open(project_link, '_blank')}
              >
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUkjL2YSqJcD-kQv0Qs1SfGLQU-A-KELb_A&usqp=CAU'
                  alt='project link'
                />
              </div>
            )}
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, idx) => (
            <p key={`name-${idx}`} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const { isMobile } = useContextProvider()
  return (
    <>
      <motion.nav variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${isMobile && 'text-[14px]'}`}>
          My work
        </p>
        <h2
          className={`${styles.sectionHeadText} ${isMobile && 'text-[18px]'}`}
        >
          Personal projects
        </h2>
      </motion.nav>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here you can find different topics projects using React.js,
          JavaScript, CSS/SASS, and HTML, and a freelance project where I have
          taken part in creating an interactive site from scratch.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((pr, idx) => {
          return (
            <ProjectCard
              key={`projects-${idx}`}
              {...pr}
              idx={idx}
              isMobile={isMobile}
            />
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
