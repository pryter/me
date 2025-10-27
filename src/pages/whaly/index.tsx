import { useState } from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import Router from "next/router"

const Page = () => {
  const [exit, setExit] = useState(false)

  const goToRanking = () => {
    setExit(true)
    setTimeout(() => {
      Router.push("whaly/ranking")
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900 font-display">
      <motion.div
        animate={exit ? { y: -400, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.8 }}
        className="mb-4 flex flex-col items-center"
      >
        <div className="relative size-32 rounded-full border-4 shadow-md">
          <Image
            layout="fill"
            src="/assets/images/whaly.jpeg"
            className="relative rounded-full"
          />
        </div>
        <h1 className="text-2xl font-bold text-white">Whaly</h1>
        <p className="rounded-lg bg-white px-4 text-gray-600">
          A lonely ginger cat.
        </p>
      </motion.div>
      <motion.div
        animate={exit && { y: -400, opacity: 0 }}
        transition={{ type: "tween", delay: 0.2, duration: 0.8 }}
        className="relative flex flex-col items-center rounded-lg p-4"
      >
        <div
          onClick={goToRanking}
          className="absolute -bottom-24 flex animate-bounce cursor-pointer flex-col items-center text-gray-100"
        >
          <span className="animate-pulse text-base">
            What&apos;s everyone listening to?
          </span>
          <div className="animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
              stroke="currentColor"
              className="size-5 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <a
          href="https://discord.com/oauth2/authorize?client_id=880000846828535818&permissions=277083450689&scope=bot%20applications.commands"
          target="_blank"
          className="flex w-full cursor-pointer items-center justify-center space-x-2 rounded-xl bg-opacity-50 bg-gradient-to-r from-cyan-500 via-sky-600 to-gray-700 px-5 py-3 font-medium text-gray-100 shadow-md"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
          <span>Adopt one now !</span>
        </a>
        <button className="mt-3 flex cursor-pointer items-center space-x-2 rounded-xl bg-opacity-50 bg-gradient-to-r from-teal-600 via-emerald-600 to-gray-700 py-2 pl-5 pr-6 font-medium text-gray-100 shadow-md">
          <svg
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            {" "}
            <path d="M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.478,0.278,0.638,0.891,0.359,1.368 C22.679,9.572,22.344,9.75,22,9.75c-0.171,0-0.343-0.043-0.501-0.135C21.471,9.598,18.663,8,15.002,8 C11.34,8,8.531,9.599,8.503,9.615C8.026,9.892,7.414,9.729,7.137,9.251C6.86,8.775,7.021,8.164,7.497,7.886 c0.102-0.06,2.023-1.158,4.848-1.65c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357 c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301 c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.377-0.093,0.492-0.25l1.19-1.612 c-2.61-0.629-3.99-1.618-4.073-1.679c-0.444-0.327-0.54-0.953-0.213-1.398c0.326-0.443,0.95-0.541,1.394-0.216 C7.625,20.217,10.172,22,15,22c4.847,0,7.387-1.79,7.412-1.808c0.444-0.322,1.07-0.225,1.395,0.221 c0.324,0.444,0.23,1.066-0.212,1.392c-0.083,0.061-1.456,1.048-4.06,1.677l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25 c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301 C29,15.092,26.436,8.158,25.12,6.946z M11,19c-1.105,0-2-1.119-2-2.5S9.895,14,11,14s2,1.119,2,2.5S12.105,19,11,19z M19,19 c-1.105,0-2-1.119-2-2.5s0.895-2.5,2-2.5s2,1.119,2,2.5S20.105,19,19,19z" />
          </svg>
          <span>Visit our Discord Channel</span>
        </button>
      </motion.div>
    </div>
  )
}

export default Page
