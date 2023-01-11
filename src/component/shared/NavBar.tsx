import { useEffect, useState } from "react"

import { MinusSmallIcon } from "@heroicons/react/24/solid"
import { motion, useAnimationControls } from "framer-motion"
import Router from "next/router"

export const NavBar = () => {
  const [showNav, setSN] = useState(false)
  const animation = useAnimationControls()

  const animation2 = useAnimationControls()
  async function showA() {
    animation2.start({ borderWidth: "2px" })
    animation2.start({
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
    })
    animation2.start({ right: "-24px" })
    await animation2.start({ width: "200px" })
    animation2.start({ height: "100vh" })
    animation2.start({ top: "0px" })
  }

  async function hideA() {
    animation2.start({ top: "26px" })
    animation2.start({
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
    })
    await animation2.start({ height: "24px" })
    animation2.start({ right: "0px" })
    animation2.start({ width: "24px" })
    animation2.start({ borderWidth: "0px" })
  }

  async function hide() {
    await animation.start({ clipPath: "inset(0 0 100% 0)" })
    await animation.start({ display: "none" })
  }

  async function reveal() {
    await animation.start({ display: "block" })
    await animation.start({ clipPath: "inset(0 0 0.1% 0)" })
  }

  useEffect(() => {
    if (showNav) {
      reveal()
      showA()
    } else {
      hide()
      hideA()
    }
  }, [showNav])
  return (
    <div className="flex relative justify-between items-center py-6">
      <h1
        onClick={() => {
          Router.push("/")
        }}
        className="text-xl font-bold cursor-pointer"
      >
        Pryter
      </h1>
      <div className="hidden items-center space-x-6 sm:flex">
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
      {showNav && (
        <div
          onClick={() => {
            setSN(false)
          }}
          className="fixed top-0 left-0 z-[99] w-full min-h-screen opacity-0"
        />
      )}
      <motion.div
        animate={animation2}
initial={{width: "24px", height: "24px", top: "26px", right: "0px", borderWidth: "0px"}}
        transition={{ delay: showNav ? 0 : 0.4 }}
        className="absolute top-0 -right-6 z-[100] w-[200px] h-screen bg-white bg-opacity-20 rounded-l-lg border border-gray-700 bg-blur-sm"
      >
        <motion.div
          animate={animation}
initial={{display: "none"}}
          transition={{ delay: showNav ? 0.25 : 0 }}
          className="px-8 mt-[80px] space-y-2"
        >
          <h1
            onClick={() => {
              Router.push("/about")
            }}
            className="font-bold text-right "
          >
            About me
          </h1>
          <h1
            onClick={() => {
              Router.push("/projects")
            }}
            className="font-bold text-right"
          >
            Projects
          </h1>
          <h1 className="font-bold text-right">Socials</h1>
        </motion.div>
      </motion.div>
      <div className="flex z-[101] sm:hidden">
        <div
          onClick={() => {
            setSN(true)
          }}
          className="flex flex-col items-end"
        >
          <div className="relative w-6 h-4">
            <MinusSmallIcon
              stroke={"currentColor"}
              strokeWidth={1.8}
              className="absolute top-0 left-0 w-4 h-4 text-gray-900"
            />
            <MinusSmallIcon
              stroke={"currentColor"}
              strokeWidth={1.8}
              className="absolute top-0 left-2 w-4 h-4 text-gray-900"
            />
          </div>
          <MinusSmallIcon
            stroke={"currentColor"}
            strokeWidth={1.8}
            className="-mt-2 w-4 h-4 text-gray-900"
          />
        </div>
      </div>
    </div>
  )
}
