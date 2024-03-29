import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'
import { useContextProvider } from '../../useContext/UseContext'

const Earth = ({ isMobile }) => {
  const earth = useGLTF('./space/scene.gltf')
  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 2 : 1.8}
      position-x={-1.5}
      position-y={0}
      rotation-y={-1.5}
    />
  )
}

const EarthCanvas = () => {
  const { isMobile } = useContextProvider()

  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fav: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={CanvasLoader}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={isMobile ? Math.PI / 20 : Math.PI / 4}
          minPolarAngle={isMobile ? Math.PI / 20 : Math.PI / 4}
        />
        <Earth isMobile={isMobile} />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas
