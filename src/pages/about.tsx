import { Footer } from "@/component/shared/Footer"
import { NavBar } from "@/component/shared/NavBar"

const Page = () => {
  return (
    <div className="relative z-20 mx-auto flex min-h-screen max-w-4xl flex-col justify-between px-6 font-display text-gray-900">
      <div>
        <NavBar />
      </div>
      <Footer />
    </div>
  )
}

export default Page
