import { FC, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { GetServerSideProps, NextPage } from "next"

import { initialiseDB } from "@/libs/firebase-admin"

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await initialiseDB().collection("indexed").doc("main").get()
  return {
    props: {
      data: data.data(),
    },
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
      <h1 className="text-gray-100 font-semibold text-xl">{index}</h1>
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
          className="absolute sm:text-sm top-6 inline max-w-[70%] truncate text-white text-xs"
        >
          {title}
        </a>
        <h1 className="text-sm sm:text-base text-gray-200">{count}</h1>
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
    const arr: any[] = []
    if (!data) return
    const rank = data.ranking

    Object.keys(rank).forEach((k) => {
      arr.push({ url: k, ...rank[k] })
    })

    const sorted = arr.sort((a, b) => a.playCount - b.playCount)

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
    )} ${month[date.getMonth()]} ${date.getFullYear()}`
    setDate(datString)
  }, [data])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900">
      <div className="max-w-2xl">
        <div className="w-screen px-8 sm:px-0 sm:w-full sm:max-w-lg">
          <motion.div
            transition={{ type: "tween", duration: 0.8 }}
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-2xl text-gray-100 font-medium">Ranking</h1>
            <p className="text-gray-100">
              Anonymous most listening tracks across entire platform.
              <span className="text-sm sm:text-base">
                <br className="sm:hidden" />
                <br />
                Last update: <span className="text-gray-400">{dateText}</span>
              </span>
            </p>
            <p className="text-gray-500 sm:text-sm text-xs mb-8 sm:mb-10">
              Note: We never store any detail about your server or your command
              usage.
            </p>
          </motion.div>
          <motion.div
            transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full flex flex-col space-y-5 sm:space-y-6"
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
            className="sm:w-full sm:max-w-lg bg-gray-700 mt-12 flex flex-col rounded-md h-48 sm:h-64 py-3 px-4 overflow-y-scroll space-y-1"
          >
            {other.map((i: any, k) => {
              return (
                <div
                  key={`leftOver-${k}`}
                  className="text-gray-200 flex items-center"
                >
                  <h1 className="mr-2 text-lg text-gray-400">{k + 6}</h1>
                  <a className="text-gray-400 break-all w-full truncate sm:text-base text-sm">
                    {i.title}
                  </a>
                  <h1 className="ml-2 text-right">{i.playCount}</h1>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
      <div className="text-xs fixed bottom-2 left-0 text-center w-full">
        <a
          target="_blank"
          href="service/proxy"
          className="cursor-pointer text-white"
        >
          Inspect service
        </a>
      </div>
    </div>
  )
}

export default Page
