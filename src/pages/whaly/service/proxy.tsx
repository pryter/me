import { useEffect, useState } from "react"

import Head from "next/head"

const Page = () => {
  const [data] = useState(
    `<div class="flex items-center justify-center w-full min-h-screen fixed"><h1 class="text-gray-700 text-lg">Access denied</h1></div>`
  )

  // const getRenderable = async () => {
  //   const pageData = await fetch("http://192.168.1.47:3000/servers", {mode: "cors"})

  //   console.log(pageData)

  //   let data = `<div class="flex items-center justify-center w-full min-h-screen fixed"><h1 class="text-gray-700 text-lg">Access denied</h1></div>`

  //   if (pageData.status === 200) {
  //     const blob = await pageData.blob()
  //     data = await blob.text()
  //     data =
  //       data
  //         .split("<body>")[1]
  //         ?.split("</body>")[0]
  //         ?.replace(`id="__next"`, "")
  //         .split(`<script id="__NEXT_DATA__" type="application/json">`)[0] || ""
  //   }

  //   setData(data)
  // }

  useEffect(() => {
    window.location.href = "http://192.168.1.67:3000"
  }, [])

  return (
    <>
      <Head>
        <title>Whaly Service Report Proxy</title>
      </Head>
      <div>
        <h1 className="hidden px-2">e</h1>
        <h1 className="hidden text-green-600">e</h1>
        <h1 className="hidden text-gray-600">e</h1>
        <h1 className="hidden text-gray-700">e</h1>
        <h1 className="hidden text-gray-800">e</h1>
        <h1 className="hidden bg-blue-100">e</h1>
        <h1 className="hidden bg-blue-50">e</h1>
        <h1 className="rounded-l-lg text-yellow-600 flex-grow space-y-6 px-3 truncate mt-1 bg-yellow-100 space-y-6 mb-6 hidden py-1 font-medium">
          e
        </h1>
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
      </div>
    </>
  )
}

export default Page
