import Head from "next/head"

const Page = () => {
  return (
    <>
    <Head>
      <title>Whaly Service Report</title>
    </Head>
    <div>
       <iframe src="http://192.168.1.47:3000/servers"
            frameBorder="0" 
            width="100%" 
            height="100%" 
            className="min-h-screen">
  </iframe>
    </div>
    </>
  )
}

export default Page