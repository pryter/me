import Head from "next/head"

const Page = () => {
  return (
    <>
      <Head>
        <title>Whaly Service Report</title>
      </Head>
      <div>
        <iframe
          src="/whaly/service/proxy"
          frameBorder="0"
          width="100%"
          height="100%"
          className="min-h-screen"
        ></iframe>
      </div>
    </>
  )
}

export default Page
