import { SectionWrapper } from '../hoc'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { useContextProvider } from '../useContext/UseContext'

const Tech = () => {
  const { isMobile } = useContextProvider()
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech, idx) => (
        <div className={`w-28 h-28 ${isMobile && 'w-14 h-14'}`} key={idx}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')
