import Router from "next/router"

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <h1
        onClick={() => {
          Router.push("/")
        }}
        className="font-bold text-xl cursor-pointer"
      >
        Pryter
      </h1>
      <div className="flex items-center space-x-6">
        <h1
          onClick={() => {
            Router.push("/about")
          }}
          className="cursor-pointer"
        >
          about me
        </h1>
        <h1
          onClick={() => {
            Router.push("/projects")
          }}
          className="cursor-pointer"
        >
          projects
        </h1>
        <h1>socials</h1>
      </div>
    </div>
  )
}
