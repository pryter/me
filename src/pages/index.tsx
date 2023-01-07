import Image from "next/image"
import { motion } from "framer-motion"
import { FC, ReactNode } from "react"
import Router from "next/router"

const SelfReveal: FC<{ children: ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0.1% 0 0)" }}
      transition={{
        type: "tween",
        duration: 0.8,
        delay: delay || 0,
      }}
    >
      {children}
    </motion.div>
  )
}
const Index = () => {
  return (
    <div className="w-full min-h-screen relative font-display">
      <div className="absolute w-full top-0 left-0 min-h-screen">
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0.1% 0)" }}
          transition={{
            type: "tween",
            duration: 1.5,
          }}
          className="w-full h-full absolute top-0 left-0 backdrop-blur-[3px] z-10 border border-gray-900 "
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.4 }}
        >
          <Image
            src={"/images/terrain.svg"}
            layout={"fill"}
            className="object-cover"
          />
        </motion.div>
      </div>
      <div className="flex flex-col text-gray-900 min-h-screen max-w-4xl mx-auto px-6 relative z-20">
        <div className="flex items-center justify-between py-6">
          <SelfReveal delay={1.4}>
            <h1 className="font-bold text-xl">Pryter</h1>
          </SelfReveal>
          <SelfReveal delay={2}>
            <div className="flex items-center space-x-6">
              <h1
                onClick={() => {
                  Router.push("/about")
                }}
                className="cursor-pointer"
              >
                about me
              </h1>
              <h1
                onClick={() => {
                  Router.push("/projects")
                }}
                className="cursor-pointer"
              >
                projects
              </h1>
              <h1>socials</h1>
            </div>
          </SelfReveal>
        </div>
        <div className="flex flex-col items-center justify-center my-auto">
          <SelfReveal delay={0.8}>
            <h1 className="text-3xl font-semibold">Hello there..</h1>
          </SelfReveal>
          <SelfReveal delay={1}>
            <p className="text-center">
              Welcome to my personal profile archive
            </p>
          </SelfReveal>
        </div>
      </div>
    </div>
  )
}

export default Index
