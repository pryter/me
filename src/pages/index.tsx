import Image from "next/image"

const Index = () => {
  return (
    <div className="relative flex min-h-screen  w-full flex-col items-center justify-center bg-yellow-50">
      <Image src={"/cat.png"} alt="cat" width={200} height={250} />
      <h1 className="mt-2 text-center text-[30px] font-semibold">
        Under Construction
      </h1>
    </div>
  )
}

export default Index
