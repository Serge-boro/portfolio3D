import { Suspense, useEffect, useState, renderer } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'
import { useContextProvider } from '../../useContext/UseContext'

const Computers = ({ isMobile, rotation }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  console.log(rotation)

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {rotation && !isMobile ? (
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.3 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.5, -1.5]}
          rotation={[-0.01, -0.22, -0.1]}
        />
      ) : (
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.3 : 0.75}
          position={isMobile ? [0, -2, -0.6] : [0, -2.2, -1.5]}
          rotation={[-0.01, 0.4, -0.1]}
        />
      )}
    </mesh>
  )
}

const ComputerCanvas = ({ isMobile, setIsMobile, rotation, checkMobile }) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChanges = (e) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChanges)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChanges)
    }
  }, [])

  return (
    <>
      {checkMobile && isMobile ? (
        <div className='absolute'>
          <img
            src='https://t3.ftcdn.net/jpg/05/69/49/36/360_F_569493678_dbRCvKdlv2LTjYyPnRfGZWoJBqf98eDW.jpg'
            className=' w-[380px] mt-[400px] z-[1]'
          />
        </div>
      ) : (
        <Canvas
          frameloop='demand'
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader isMobile={isMobile} />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 3}
              minPolarAngle={Math.PI / 3}
            />
            <Computers isMobile={isMobile} rotation={rotation} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </>
  )
}

export default ComputerCanvas
