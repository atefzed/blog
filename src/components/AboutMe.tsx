import { SiGithub } from "@icons-pack/react-simple-icons"
import { Button } from "./ui/button"
import { AtSign, ScrollText, SquareUserRound } from "lucide-react"
import Link from "next/link"

const links = [{
  label: "LinkedIn",
  url: "https://www.linkedin.com/in/atefzaafouri",
  icon: <SquareUserRound />
},{
  label: "Github",
  url: "https://github.com/atefzed",
  icon: <SiGithub />
},{
  label: "Resume",
  url: "/docs/CV Atef ZAAFOURI.pdf",
  icon: <ScrollText />
},{
  label: "Email",
  url: "mailto:atefzaafouri@gmail.com",
  icon: <AtSign />
}]

const AboutMe = () => (
  <div className="flex flex-col">
    <div className="flex flex-col gap-4 text-center">
      <div>
        <h2 className="text-xl font-bold pb-4">Hey, i am Atef ZAAFOURI!</h2>
        <h4 className="text-stone-700 font-semibold">A Web Developer based in Paris, FRANCE</h4>
        <p className="text-stone-700">
        Specializing in building scalable web applications with React, Node.js, and cloud technologies. I help businesses transform their ideas into modern web solutions that users love.
        </p>
      </div>
      <ul className="min-w-32 flex justify-center gap-2 flex-wrap">
        {links.map(link => (
          <li key={link.label} >
            <Link href={link.url} target="_blank">
              <Button variant="outline" className="cursor-pointer">
                {link.icon}
                {link.label}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default AboutMe