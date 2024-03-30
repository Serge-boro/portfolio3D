import { SectionWrapper } from '../hoc'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { useContextProvider } from '../useContext/UseContext'

const Tech = () => {
  const { isMobile, checkMobile } = useContextProvider()
  console.log(checkMobile)
  return (
    <>
      {!checkMobile && (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((tech, idx) => (
            <div className={`w-28 h-28`} key={idx}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default SectionWrapper(Tech, '')
