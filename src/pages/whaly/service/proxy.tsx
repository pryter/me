import Head from "next/head"
import { useEffect } from "react"

const Page = () => {
  useEffect(() => {
    window.location.href = "http://192.168.1.47:3000/servers"
  }, [])

  return (
    <>
      <Head>
        <title>Whaly Service Report Proxy</title>
      </Head>
      <div></div>
    </>
  )
}

export default Page
