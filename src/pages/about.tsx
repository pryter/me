import { Footer } from "@/component/shared/Footer"
import { NavBar } from "@/component/shared/NavBar"

const Page = () => {
  return (
    <div className="flex relative z-20 flex-col justify-between px-6 mx-auto max-w-4xl min-h-screen font-display text-gray-900">
      <div>
        <NavBar />
        <div className="py-8 px-2">
          <h1 className="mb-4 text-2xl font-bold text-center">- About me -</h1>
          <div className="flex flex-col items-start mx-auto mb-6 max-w-2xl font-medium">
            <h1>
              <span className="font-semibold">Name:</span> Phongpak Tengpipat
            </h1>
            <h1>
              <span className="font-semibold">Birthdate:</span> 28 February 2005
            </h1>
            <h1>
              <span className="font-semibold">Favorite Animals:</span> Cats
            </h1>
            <h1>
              <span className="font-semibold">Favorite Colour:</span> Pink
            </h1>
          </div>
          <p className="mx-auto max-w-2xl">
            <h1 className="mb-2 text-xl font-semibold">
              A Young Passionate Man
            </h1>
            &nbsp;&nbsp;&nbsp;&nbsp;I grew up in a small town in the
            northeastern part of Thailand called Ubon Ratchathani. As an
            eager-to-learn young man living in my small town, where
            technological advances were limited, I felt disconnected from new
            discoveries as I found it very difficult to dive into any research
            or experiment. Nevertheless, this feeling of limitation to expand
            has never stopped me from making a mess in our house by conducting
            some weird experiment during my primary school years. Classroom
            lessons were the only resources that led to all my experiment ideas.
            Even though the ideas from the course books might not sound
            interesting to most of my peers, they always hyped me up and urged
            me to conduct some of them at home. <br />
            <br />
            <h1 className="mb-2 text-xl font-semibold">Meeting the Internet</h1>
            &nbsp;&nbsp;&nbsp;&nbsp;In 2010, the internet connection in my town
            started to be more usable, along with the existence of a computer in
            my house. Aside from its slow processing speed, it gave me the
            greatest experience by allowing me to absorb every bit of
            information I desired at any time. This tremendously expanded my
            interest in researching and emboldened me to do more experiments.{" "}
            <br /> <br />
            <h1 className="mb-2 text-xl font-semibold">Love at First Sight</h1>
            Through my years of education, I found myself to be attracted to a
            very interesting topic: Programming. <br /> <br />I found various
            opportunities in programming since it instructed how a particular
            computer worked, which would inevitably be included in almost
            everything soon, especially when many jobs are starting to be
            automated or precisely controlled by machines.
            <br /> <br /> I started my first step in programming by learning
            website development, mainly because it is universally accessible,
            and It was capable of doing most of the tasks. Initially, I was
            using basic languages, and then I switched to newer tools: React and
            Javascript. This enabled me to develop a more complex web
            application (A functional application hosted on a website). <br />{" "}
            <br />
            <h1 className="mb-2 text-xl font-semibold">At School</h1>
            Currently, I am in my last year of high school in Bangkok, Triam
            Udom Suksa School. Despite the school&apos;s prestigious academic
            reputation for being the first-ranking high school in Thailand, it
            also offers diverse extracurricular activities. I worked in the
            school organization named Triam Udom Clubs Management Committee as a
            website developer in my first year here.
            <br /> <br /> My first project was our school’s Club registration
            system, a web application for over 3,000 students to select over 70
            clubs concurrently. My team and I went through multiple
            brainstorming to ensure the system was unexploitable, practical, and
            fair. It was a tough time for me working as the only developer in
            the organization constructing such a complex application alone while
            carrying out my usual student tasks such as class assignments and
            class attendance. I had to function on very little sleep in order to
            achieve all the tasks required. <br /> <br />
            <h1 className="mb-2 text-xl font-semibold">A Valuable Lesson</h1>
            The stress became more intense after I got promoted to chairman of
            the organization. More responsibility must be taken in every aspect,
            such as communicating with over 70 club presidents effectively, and
            much more. Being an executive gave me the opportunity to introduce
            new changes faster and easier. On the other hand, it was also a
            high-strained job in terms of planning and strategy. Those
            experiences made me develop a new aspect of how inventions are
            invented. I used to understand that my inventions were only the
            product of the physical experiment, but in fact, the invention can
            be in any form, physical or not. I can confidently say that my
            projects are inventions, and they improve the school in a way that
            it has not been before. <br /> <br />
            <h1 className="mb-2 text-xl font-semibold">In The Future</h1>I
            believe every innovative change is formed by inventive people
            gathering together to exchange ideas, brainstorm, and share their
            competencies collaboratively, like what I have encountered here at
            Triam Udom Suksa School.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page
