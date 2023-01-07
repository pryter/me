import { useEffect, useState } from "react"

import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import Head from "next/head"
import { MathUtils } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Scene = ({ gltf, title }: any) => {
  useFrame((state) => {
    if (!title) {
      const { camera } = state
      camera.zoom = MathUtils.lerp(camera.zoom, 0.6, 0.1)
      camera.updateProjectionMatrix()
    }
  })

  return (
    <>
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        target={title ? [-20, 1.5, -6] : [0, 0, 0]}
      />

      <>
        {
          // @ts-ignore
          <primitive object={gltf.scene}></primitive>
        }
        <pointLight
          position={[0, 10, 0]}
          rotation={[0, 0, 45.2]}
          power={4}
          distance={30}
          decay={1.6}
          color={"#fff"}
        />
        <pointLight
          position={[-4.9, 3.3067, 5.47324]}
          rotation={[0, 0, 45.2]}
          power={20}
          distance={9}
          decay={1.6}
          color={"#FFED6D"}
        />
        <pointLight
          position={[7.159, 3.3067, 4.0242]}
          rotation={[0, 0, 211]}
          power={20}
          distance={9}
          decay={1.6}
          color={"#FFED6D"}
        />
        <rectAreaLight
          position={[7.85, 20.7331, 13.469]}
          rotation={[-57, -80.5, -46.7]}
          power={2000}
          color="#98BBD8"
        />
        <rectAreaLight
          position={[-10.1477, 17.7331, -15.531]}
          rotation={[-629, -19.8, -4.61]}
          power={14000}
          color="#98BBD8"
        />
      </>
    </>
  )
}
const Index = () => {
  const [gltf, setObj] = useState<any>(null)

  const [title, setTitle] = useState(true)

  useEffect(() => {
    const load = async () => {
      const loader = new GLTFLoader()
      const ob = await loader.loadAsync(
        "https://pryter.me/assets/scenes/forest_scene_web.glb"
      )
      setObj(ob)
    }

    load()
  }, [])

  return (
    <>
      <Head>
        <title>Pryter</title>
      </Head>
      <div className="flex fixed flex-col justify-center items-center w-full min-h-screen bg-gray-900">
        {gltf === null ? (
          <h1 className="text-xl text-white animate-pulse">Loading..</h1>
        ) : (
          <Canvas
            style={{
              width: "100vw",
              height: "100vh",
              maxHeight: "100vh",
            }}
            resize={{ offsetSize: true }}
            dpr={[1, 2]}
            camera={{
              position: [10, 2, 6],
              fov: 60,
              zoom: 1.4,
            }}
          >
            <Scene gltf={gltf} title={title} />
          </Canvas>
        )}
      </div>
      {title && (
        <div
          onClick={() => {
            setTitle(false)
          }}
          className="flex fixed items-center w-full min-h-screen bg-gray-800 bg-opacity-20 backdrop-blur text-gray-50"
        >
          <div className="flex fixed top-0 justify-between items-center py-3 px-6 space-x-2 w-full backdrop-blur-xl bg-gray-600 bg-opacity-25 border border-white border-opacity-20 sm:space-x-0 md:px-10 blackdrop-blur-sm">
            <h1 className="font-semibold">Pryter</h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Learning Blender: </span>
              <div className="relative w-32 h-4 bg-white bg-opacity-90 rounded-md">
                <div className="absolute w-16 h-4 bg-gray-600 bg-opacity-70 rounded-md border border-gray-700 animate-pulse" />
              </div>
            </div>
          </div>
          <div className="flex relative flex-col justify-center items-center py-6 w-full  md:min-h-screen">
            <h1 className="text-4xl font-medium">Hello there</h1>
            <p className="text-lg font-medium">
              Welcome to my personal website!
            </p>
            <div className="absolute py-2 px-4 mt-48 bg-gray-500 bg-opacity-25 rounded-lg border border-white border-opacity-30 backdrop-blur-sm animate-pulse cursor-pointer">
              <span>Tap anywhere to look around..</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Index
