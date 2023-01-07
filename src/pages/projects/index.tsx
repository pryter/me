import { NavBar } from "@/component/shared/NavBar"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import { FC } from "react"

const ProjectContainer: FC<{
  title: string
  description: string
  url?: string
}> = ({ title, description, url }) => {
  return (
    <div className="flex items-center bg-gray-800 text-white rounded-lg pl-5 w-[300px] mr-3 mt-2">
      <div className="py-3">
        <h1 className="font-bold">{title}</h1>
        <p className="break-all tracking-tight text-sm mt-1">{description}</p>
        <h1></h1>
      </div>
      <a
        href={url}
rel="noreferrer"
        target={"_blank"}
        className="flex items-center shrink-0 ml-3 text-white h-full hover:bg-gray-700 rounded-r-lg pl-3 pr-4 cursor-pointer"
      >
        <ArrowRightIcon
          stroke={"currentColor"}
          strokeWidth={1.2}
          className="w-5 h-5 shrink-0"
        />
      </a>
    </div>
  )
}
const Page = () => {
  return (
    <div className="flex flex-col text-gray-900 min-h-screen max-w-4xl mx-auto px-6 relative z-20 font-display">
      <NavBar />
      <div className="py-8">
        <h1 className="text-2xl font-bold text-center mb-8">My projects</h1>
        <div className="space-y-8">
          <div>
            <h1 className="text-lg font-bold">Personal Projects</h1>
            <p className="text-gray-700 font-medium mb-2">
              Personal Projects: any idea that came into my mind
            </p>
            <div className="flex flex-wrap">
              <ProjectContainer
                title={"Whaly"}
                description={"Discord music bot full with features :)"}
                url={"https://github.com/pryter/Whaly"}
              />
              <ProjectContainer
                title={"Word Learner"}
                description={"The app that learn bad word in Thai"}
                url={"https://github.com/pryter/word-filter"}
              />
              <ProjectContainer
                title={"Me"}
                description={"My personal website (this website)"}
                url={"https://github.com/pryter/me"}
              />
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold">
              Triam Udom Clubs Management Committee
            </h1>
            <p className="text-gray-700 font-medium mb-2">
              Projects related to Triam Udom Clubs Management Committee
            </p>
            <div className="flex flex-wrap">
              <ProjectContainer
                title={"Clubreg"}
                description={"Triam Udom Club Registration System since 2022"}
                url={"https://github.com/triamudomcmc/clubreg"}
              />
              <ProjectContainer
                title={"Loy Kratong"}
                description={"Online Thai Loy Krathong Festival year 2022"}
                url={"https://github.com/triamudomcmc/loy-kratong"}
              />
              <ProjectContainer
                title={"Custom Schedule"}
                description={"Customisable class schedule for students"}
                url={"https://github.com/triamudomcmc/schedule-generator"}
              />
              <ProjectContainer
                title={"Online Open House"}
                description={"Triam Udom Online Open House website year 2022"}
                url={"https://github.com/triamudomcmc/openhouse2020"}
              />
              <ProjectContainer
                title={"TUCMC Auth"}
                description={"Authentication package for TUCMC account"}
                url={"https://github.com/triamudomcmc/tucmc-auth"}
              />
              <ProjectContainer
                title={"Schedule Parser"}
                description={"Triam Udom Suksa class schedule OCR data parser"}
                url={"https://github.com/pryter/TimeTableParser"}
              />
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold">Triam Udom Computer Clubs</h1>
            <p className="text-gray-700 font-medium mb-2">
              Projects related to Triam Udom Computer Clubs
            </p>
            <div className="flex flex-wrap">
              <ProjectContainer
                title={"TUMSO Website"}
                description={"TU Maths and Science Olympiad Registration site"}
                url={"https://github.com/pryter/TUMSO-website"}
              />
              <ProjectContainer
                title={"Computer Club Site"}
                description={"Triam Udom Computer Club course website"}
                url={"https://github.com/pryter/me"}
              />
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold">Triam Udom Suksa School</h1>
            <p className="text-gray-700 font-medium mb-2">
              Projects related to Triam Udom Suksa School
            </p>
            <div className="flex flex-wrap">
              <ProjectContainer
                title={"Room Announcement"}
                description={"Triam Udom Student Creds Announcement site"}
                url={"https://github.com/pryter/room-announce"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
