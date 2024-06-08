import Education from "./components/Education"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import xyp from "./assets/xyp.jpeg"
import Projects from "./components/Projects"
import Socials from "./components/Socials"

export default function App() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-lg mx-auto px-[15%] my-16">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">
              Bivek Nepal
            </h1>
            <p>
              Software Engineer | <span className="font-bold">LishnuTech</span>
            </p>
            <p>Hola👋</p>
            <p className="text-justify max-w-prose">
              I am Bivek Nepal and I am an Information Management student from Jhapa. I enjoy
              coding and solving problems. You will either find me coding a project or solving problems
              in LeetCode. When I am not doing any of that, I like to play games or watch documentaries.
            </p>
          </div>
          <img
            src={xyp}
            alt="Bhaskar Rijal"
            className="object-cover w-auto h-32 md:w-32 md:h-auto grayscale"
            width={300}
            height={300}
            placeholder='blur'
          />
        </div>
        <Experience />
        <Skills /><br />
        <Education /><br />
        <Projects /><br />
        <Socials /><br />
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium">Contact</h2>
          <ul className="list-inside">
            <li>
              <span>{'email: '}</span>
              <a href="mailto:nepalbivek08@gmail.com" className="italic underline text-primary">
                nepalbivek08@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
