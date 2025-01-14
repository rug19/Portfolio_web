import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons/faBarsStaggered";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Drawer() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden ">
      {/* Botão para abrir o Drawer */}

      <div className="fixed top-4 right-4 z-50 flex items-center gap-5">
        {!isOpen && (
          <>
            <ThemeToggle />
            <LanguageSwitcher />
          </>
        )}
        <button
          className="text-white bg-green-500 p-2 rounded-md"
          onClick={toggleDrawer}
        >
          <FontAwesomeIcon
            className="text-green"
            size="xl"
            icon={isOpen ? faXmark : faBarsStaggered}
          />
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 md:w-96 h-full bg-white dark:bg-black text-white font-sans transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <nav className="mt-16 font-sans font-bold text-lg">
          <h2 className="pt-10 text-2xl text-center md:text-3xl text-black dark:text-white font-sans font-extrabold">
            RugCosta<span className="text-green">.</span>
          </h2>
          <ul className="mt-10 text-center space-y-7 text-black dark:text-white">
            <li>
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? "text-green underline underline-offset-8"
                    : "hover:underline hover:underline-offset-8 hover:text-green"
                }`}
                onClick={toggleDrawer}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className={`${
                  location.pathname === "/resume"
                    ? "text-green underline underline-offset-8"
                    : "hover:underline hover:underline-offset-8 hover:text-green"
                }`}
                onClick={toggleDrawer}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`${
                  location.pathname === "/projects"
                    ? "text-green underline underline-offset-8"
                    : "hover:underline hover:underline-offset-8 hover:text-green"
                }`}
                onClick={toggleDrawer}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className={`${
                  location.pathname === "/contacts"
                    ? "text-green underline underline-offset-8"
                    : "hover:underline hover:underline-offset-8 hover:text-green"
                }`}
                onClick={toggleDrawer}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay (para escurecer o fundo) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
}
