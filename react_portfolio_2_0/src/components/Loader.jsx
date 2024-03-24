import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = ({ isMobile }) => {
  const { progress } = useProgress()
  return (
    <Html
      as='div'
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span
        className={`canvas-loader ${isMobile && 'canvas-loader-mobile'}`}
      ></span>
      <p className={`percentStyle ${isMobile && 'percentStyleMobile'}`}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLoader
