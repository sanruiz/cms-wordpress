import Link from "next/link";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <nav className="pt-3  flex justify-between">
      <h1 className="text-3xl font-fraunces">
        <Link href={"/portfolio"}>Santiago Ramirez</Link>
      </h1>
      <ul className="flex items-center">
        <li
          onClick={() => {
            setDarkMode(!darkMode);
            console.log(darkMode);
          }}
        >
          {darkMode ? <BsSun /> : <BsMoonStarsFill />}
        </li>
        <li>
          <a
            className="bg-gradient-to-r bg-cyan-600 hover:bg-cyan-700 rounded-md ml-8 text-white px-4 py-2"
            href="https://www.linkedin.com/in/sanruiz/"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
