import Head from "next/head"

export async function getServerSideProps() {
  const pageData = await fetch("http://192.168.1.47:3000/servers")

  let data = `<div class="flex items-center justify-center w-full min-h-screen fixed"><h1 class="text-gray-700 text-lg">Access denied</h1></div>`

  if (pageData.status === 200) {
    const blob = await pageData.blob()
    data = await blob.text()
    data =
      data
        .split("<body>")[1]
        ?.split("</body>")[0]
        ?.replace(`id="__next"`, "")
        .split(`<script id="__NEXT_DATA__" type="application/json">`)[0] || ""
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

const Page = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Whaly Service Report Proxy</title>
      </Head>
      <div>
        <h1 className="rounded-l-lg text-yellow-600 text-green-600 flex-grow space-y-6 px-3 truncate text-gray-600 text-gray-700 text-gray-800 mt-1 bg-yellow-100 bg-blue-100 space-y-6 mb-6 hidden py-1 px-2 bg-blue-50 font-medium">
          e
        </h1>
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
      </div>
    </>
  )
}

export default Page
