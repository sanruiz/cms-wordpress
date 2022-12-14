import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1  border-t border-accent-2">
      <div className="py-8 flex flex-col lg:flex-row mx-auto items-center md:max-w-xl">
        <h3 className="text-2xl lg:text-3xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          Statically Generated with Next.js.
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
            href="https://github.com/sanruiz/cms-wordpress"
            target={"_blank"}
            rel="noreferrer"
            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            Read Documentation
          </a>
          <a
            href="https://github.com/sanruiz/cms-wordpress"
            target={"_blank"}
            rel="noreferrer"
            className={"mx-3 font-bold hover:underline"}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
