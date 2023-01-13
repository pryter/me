import { Footer } from "@/component/shared/Footer"
import { NavBar } from "@/component/shared/NavBar"
import {
  SocialFacebook,
  SocialGitHub,
  SocialInstagram,
} from "@/component/Socials"

const Page = () => {
  return (
    <div className="flex relative z-20 flex-col justify-between px-6 mx-auto max-w-4xl min-h-screen font-display text-gray-900">
      <div>
        <NavBar />
        <div className="py-8 px-2">
          <h1 className="mb-4 text-2xl font-bold text-center">- Socials -</h1>
          <div className="flex flex-col items-center mt-8 space-y-4">
            <a
              href="https://www.facebook.com/profile.php?id=100008107773772&mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
              className="flex items-center py-2 px-4 space-x-2 text-gray-900 hover:bg-gray-200 rounded-lg border border-gray-600 cursor-pointer"
            >
              <SocialFacebook className="w-10 h-10" />
              <h1 className="text-xl">Peter Phongpak</h1>
            </a>
            <div className="flex space-x-2">
              <a
                href="https://www.instagram.com/pryterr/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center py-2 px-4 space-x-2 text-gray-900 hover:bg-gray-200 rounded-lg border border-gray-600 cursor-pointer"
              >
                <SocialInstagram className="w-10 h-10" />
                <h1 className="text-xl">@pryterr</h1>
              </a>
              <a
                href="https://github.com/pryter"
                target="_blank"
                rel="noreferrer"
                className="flex items-center py-2 px-4 space-x-2 text-gray-900 hover:bg-gray-200 rounded-lg border border-gray-600 cursor-pointer"
              >
                <SocialGitHub className="w-10 h-10" />
                <h1 className="text-xl">pryter</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page
