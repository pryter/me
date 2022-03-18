import { useEffect, useState } from "react"

import { PresentationControls, Text } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Index = () => {
  const [gltf, setObj] = useState<any>(null)

  useEffect(() => {
    const load = async () => {
      const loader = new GLTFLoader()
      const ob = await loader.loadAsync(
        "https://pryter.me/assets/models/myfirstTree.glb"
      )
      setObj(ob)
    }

    load()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center pr-36 w-full min-h-screen bg-blue-100">
      {gltf === null ? (
        "Loading"
      ) : (
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
            {
              // @ts-ignore
              <primitive object={gltf.scene}></primitive>
            }
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
      )}
    </div>
  )
}

export default Index
