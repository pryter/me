import { Suspense } from "react"

import { PresentationControls, useGLTF, Text } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const Index = () => {
  const gltf = useGLTF("http://localhost:3000/assets/models/myfirstTree.glb")

  return (
    <div className="flex flex-col justify-center items-center pr-36 w-full min-h-screen bg-blue-100">
      <Suspense fallback={null}>
        <Canvas
          style={{
            width: "100vw",
            height: "100vh",
            maxHeight: "1000px",
          }}
          resize={{ offsetSize: true }}
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5.5], fov: 60 }}
        >
          <pointLight intensity={1} position={[10, 10, 26]} color="#fff" />
          <PresentationControls
            rotation={[0, 0.6, 0]}
            snap={true}
            polar={[0, Math.PI / 8]}
          >
            <primitive object={gltf.scene}></primitive>
          </PresentationControls>
          <Text
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
            position={[0.5, -0.6, 0]}
          >
            My First Blender Tree
          </Text>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default Index
