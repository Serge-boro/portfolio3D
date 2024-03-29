import { SectionWrapper } from '../hoc'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { useContextProvider } from '../useContext/UseContext'

const Tech = () => {
  const { isMobile } = useContextProvider()
  return (
    <div
      className={`hidden flex flex-row flex-wrap justify-center gap-10 ${
        isMobile && 'hidden'
      }`}
    >
      {technologies.map((tech, idx) => (
        <div className={`w-28 h-28`} key={idx}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')
