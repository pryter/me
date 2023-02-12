import { FC, useEffect, useState } from "react"

import { motion } from "framer-motion"
import { GetStaticProps, NextPage } from "next"

import { initialiseDB } from "@/libs/firebase-admin"

export const getStaticProps: GetStaticProps = async () => {
  const data = await initialiseDB().collection("indexed").doc("top50").get()
  return {
    props: {
      data: data.data(),
    },
    revalidate: 2 * 60,
  }
}

const RankingBar: FC<{
  progress: number
  title: string
  url: string
  index: number
  count: number
}> = ({ progress, title, url, index, count }) => {
  const diffColor =
    "flex justify-end bg-gradient-to-r rounded-r-sm from-green-200 via-green-400 to-purple-700 h-6 px-2 relative"
  const defaultColor =
    "flex justify-end bg-gradient-to-r rounded-r-sm from-fuchsia-500 via-red-600 to-orange-400 h-6 px-2 relative"

  const dif = index % 2 === 0
  return (
    <div className="flex space-x-2">
      <h1 className="text-xl font-semibold text-gray-100">{index}</h1>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{
          type: "tween",
          duration: (progress * 2.2) / 100,
          delay: 0.1 + (index - 1) * 0.4,
        }}
        className={dif ? defaultColor : diffColor}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href={url}
          className="inline absolute top-6 max-w-[70%] text-xs text-white truncate sm:text-sm"
        >
          {title}
        </a>
        <h1 className="text-sm text-gray-200 sm:text-base">{count}</h1>
      </motion.div>
    </div>
  )
}

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function zeroPad(input: number) {
  let num = input.toString()
  while (num.length < 2) num = `0${num}`
  return num
}

const Page: NextPage<{ data: any }> = ({ data }) => {
  const [topfive, setTopfive] = useState<any[]>([])
  const [other, setOther] = useState<any[]>([])
  const [dateText, setDate] = useState("")

  useEffect(() => {
    if (!data) return

    const arr: any[] = data.ranking

    const sorted = arr.sort((a, b) => b.playCount - a.playCount)

    const topFive = sorted.slice(0, 5)
    const leftOver = sorted.slice(5, sorted.length)

    topFive.forEach((i: any, k) => {
      const highest = topFive[0].playCount
      topFive[k].portion = (i.playCount / highest) * 100
    })
    setTopfive(topFive)
    setOther(leftOver)
    const date = new Date(data.time)
    const datString = `${zeroPad(date.getHours())}:${zeroPad(
      date.getMinutes()
    )} ${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
    setDate(datString)
  }, [data])
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900">
      <div className="max-w-2xl">
        <div className="px-8 w-screen sm:px-0 sm:w-full sm:max-w-lg">
          <motion.div
            transition={{ type: "tween", duration: 0.8 }}
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-2xl font-medium text-gray-100">Ranking</h1>
            <p className="text-gray-100">
              Anonymous most listening tracks across entire platform.
              <span className="text-sm sm:text-base">
                <br className="sm:hidden" />
                <br />
                Last update: <span className="text-gray-400">{dateText}</span>
              </span>
            </p>
            <p className="mb-8 text-xs text-gray-500 sm:mb-10 sm:text-sm">
              Note: We never store any detail about your server or your command
              usage.
            </p>
          </motion.div>
          <motion.div
            transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col space-y-5 w-full sm:space-y-6"
          >
            {topfive.map((i: any, k) => {
              return (
                <RankingBar
                  key={`topfive-${k}`}
                  progress={i.portion}
                  title={i.title}
                  url={i.url}
                  index={k + 1}
                  count={i.playCount}
                />
              )
            })}
          </motion.div>
          <motion.div
            transition={{ type: "tween", duration: 0.8, delay: 0.4 }}
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex overflow-y-scroll flex-col py-3 px-4 mt-12 space-y-1 h-48 bg-gray-700 rounded-md sm:w-full sm:max-w-lg sm:h-64"
          >
            {other.map((i: any, k) => {
              return (
                <div
                  key={`leftOver-${k}`}
                  className="flex items-center text-gray-200"
                >
                  <h1 className="mr-2 text-lg text-gray-400">{k + 6}</h1>
                  <a className="w-full text-sm text-gray-400 truncate break-all sm:text-base">
                    {i.title}
                  </a>
                  <h1 className="ml-2 text-right">{i.playCount}</h1>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Page
