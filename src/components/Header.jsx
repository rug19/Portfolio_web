import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center bg-black fixed top-0 left-0 w-full h-20 p-5  ">
      <div className="ml-20">
        <h2 className="text-2xl  text-white  font-sans">
          RugCosta<span className="text-green">.</span>
        </h2>
      </div>
      <nav className="flex text-sm mr-20 gap-10 font-sans text-white">
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
