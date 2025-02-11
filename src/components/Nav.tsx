import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Nav = () => (
  <nav className="flex justify-between items-center w-full py-8">
    <div className="">
      <Image src="/logo.png" alt="Atef Zaafouri Blog" width={48} height={48} />
    </div>
    <ul className="flex gap-2">
      <li className="">
        <Link href="#">
          <Button variant="link">
            {"About me"}
          </Button>
        </Link>
      </li>
      <li className="">
        <Link href="#techstack">
          <Button variant="link">
            {"Tech Stack"}
          </Button>
        </Link>
      </li>
      <li className="">
        <Link href="#experiences">
          <Button variant="link">
            {"Experiences"}
          </Button>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav