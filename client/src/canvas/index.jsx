import { Canvas } from '@react-three/fiber'
import { Environment,  Center } from '@react-three/drei'

import Shirt from './Shirt'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'


// 3Dの部分

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <Center>
          <Shirt/>
        </Center>
      {/* <CameraRig>
        <Backdrop />
        <Center>
          <Shirt/>
        </Center>
      </CameraRig> */}
    </Canvas>
  )
}

export default CanvasModel