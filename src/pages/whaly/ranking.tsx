import { FC, useEffect, useState } from "react"

import { collection, getDoc, getFirestore, doc } from "firebase/firestore"
import { motion } from "framer-motion"
import { NextPage } from "next"

const RankingBar: FC<{
  progress: number
  title: string
  url: string
  index: number
  count: number
}> = ({ progress, title, url, index, count }) => {
  const diffColor =
    "flex justify-end bg-gradient-to-r rounded-md from-green-200 via-green-400 to-purple-700 h-6 px-2 relative"
  const defaultColor =
    "flex justify-end bg-gradient-to-r rounded-md from-fuchsia-500 via-red-600 to-orange-400 h-6 px-2 relative"

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
          className="absolute top-6 inline max-w-[70%] truncate text-xs text-white"
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

const Page: NextPage<{ data: any }> = () => {
  const [topfive, setTopfive] = useState<any[]>([])
  const [other, setOther] = useState<any[]>([])
  const [dateText, setDate] = useState("")

  useEffect(() => {
    ;(async function () {
      const exp = localStorage.getItem("ranking-cache-expires")
      const cache = localStorage.getItem("ranking-cache")
      let data: any
      // expired
      if (!exp || parseInt(exp, 10) < new Date().getTime() || !cache) {
        const firestore = getFirestore()
        const col = collection(firestore, "indexed")
        const docu = await getDoc(doc(col, "top50"))
        data = docu.data()

        localStorage.setItem("ranking-cache", JSON.stringify(data))
        const currentt = new Date(data.time)
        // next 30 min cache should expires
        const hardLimit = currentt.getTime() + 4 * 60 * 60 * 1000
        const min10 = new Date().getTime() + 10 * 60 * 1000
        localStorage.setItem(
          "ranking-cache-expires",
          (min10 > hardLimit ? hardLimit : min10).toString(10)
        )
      } else {
        // load cache
        data = JSON.parse(cache)
      }

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
    })()
  }, [])
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900">
      <div className="max-w-2xl">
        <div className="w-screen px-8 sm:w-full sm:max-w-lg sm:px-0">
          <motion.div
            transition={{ type: "tween", duration: 0.8 }}
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-2xl font-semibold text-gray-100">
              Anonymous Global Listening Trends
            </h1>
            <p className="text-gray-100">
              Top tracks ranked by total anonymous plays across the platform.
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
            className="flex w-full flex-col space-y-5 sm:space-y-6"
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
            className="mt-12 flex h-48 flex-col space-y-2 overflow-y-scroll rounded-xl bg-gray-700 px-6 py-4 sm:h-64 sm:w-full sm:max-w-lg"
          >
            {other.map((i: any, k) => {
              return (
                <div
                  key={`leftOver-${k}`}
                  className="flex items-center text-gray-200"
                >
                  <h1 className="mr-2 text-lg text-gray-400">{k + 6}</h1>
                  <a className="w-full truncate break-all text-sm text-gray-400 sm:text-base">
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
