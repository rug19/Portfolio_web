import { Link, useLocation } from "react-router-dom";
import Drawer from "./Drawer";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <header className="bg-white lg:bg-white/0  dark:bg-black  dark:lg:bg-black/0 md:flex  md:justify-between md:items-center  fixed z-10 top-0 left-0 w-full h-20 md:p-5 justify-between items-center p-5 lg:p-10">
      <div className="md:ml-5 lg:ml-20  ">
        <h2 className="text-2xl  md:text-3xl text-black dark:text-white  font-sans font-extrabold">
          RugCosta<span className="text-green">.</span>
        </h2>
        <Drawer />
      </div>
      <nav className="hidden lg:flex md:mr-0 items-center  font-semibold mr-20 gap-10 font-sans text-black dark:text-white pr-20 text-lg">
        <Link
          to="/"
          className={` ${
            location.pathname === "/"
              ? "text-green underline underline-offset-8 "
              : "hover:underline  hover:underline-offset-8 hover:text-green"
          }`}
        >
          {t("Header.home")}
        </Link>
        <Link
          to="/resume"
          className={` ${
            location.pathname === "/resume"
              ? "text-green underline underline-offset-8 "
              : "hover:underline  hover:underline-offset-8 hover:text-green"
          }`}
        >
          {t("Header.about")}
        </Link>
        <Link
          to="/projects"
          className={`${
            location.pathname === "/projects"
              ? "text-green underline underline-offset-8 "
              : "hover:underline  hover:underline-offset-8 hover:text-green"
          }`}
        >
          {t("Header.projects")}
        </Link>
        <Link
          to="/contacts"
          className={`${
            location.pathname === "/contacts"
              ? "text-green underline underline-offset-8 "
              : "hover:underline  hover:underline-offset-8 hover:text-green "
          }`}
        >
          {t("Header.contact")}
        </Link>
        <ThemeToggle />
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
