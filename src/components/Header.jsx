import { Link, useLocation } from "react-router-dom";
import Drawer from "./Drawer";
const underline = "text-green underline underline-offset-8";

export default function Header() {
  const location = useLocation();

  return (
    <header className="  md:flex  md:justify-between md:items-center  fixed top-0 left-0 w-full h-20 md:p-5 justify-between items-center p-5">
      <div className="ml-0 md:ml-20  ">
        <h2 className="text-2xl  md:text-3xl text-white  font-sans">
          RugCosta<span className="text-green">.</span>
        </h2>
        <Drawer/>
      </div>
      <nav className="hidden lg:flex md:mr-0 text-base font-semibold mr-20 gap-10 font-sans text-white pr-20 ">
        <Link
          to="/"
          className={` ${
            location.pathname === "/"
              ? "text-green underline underline-offset-8 "
              : "hover:underline  hover:underline-offset-8 hover:text-green"
          }`}
        >
          Home
        </Link>
        <Link
          to="/resume"
          className={` ${
            location.pathname === "/resume"
              ? "text-green underline underline-offset-8 "
              : "hover:underline  hover:underline-offset-8 hover:text-green"
          }`}
        >
          Resume
        </Link>
        <Link
          to="/projects"
          className={`${
            location.pathname === "/projects"
              ? "text-green underline underline-offset-8 "
              : "hover:underline  hover:underline-offset-8 hover:text-green"
          }`}
        >
          Project
        </Link>
        <Link
          to="/contacts"
          className={`${
            location.pathname === "/contacts"
              ? "text-green underline underline-offset-8 "
              : "hover:underline  hover:underline-offset-8 hover:text-green"
          }`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
