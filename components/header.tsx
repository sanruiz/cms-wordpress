import { BsMoonStarsFill, BsSun } from "react-icons/bs";


export default function Header({darkMode, setDarkMode}) {
  
  return (
    <nav className="pt-10  flex justify-between">
          <h1 className="text-3xl font-fraunces">Santiago Ramirez</h1>
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
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
  )
}
