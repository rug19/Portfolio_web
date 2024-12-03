import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons/faBarsStaggered";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Estado para a seção ativa

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (section) => {
    setActiveSection(section); // Atualiza a seção ativa
    toggleDrawer(!isOpen); // Fecha o Drawer
  };

  return (
    <div className=" lg:hidden">
      {/* Botão para abrir o Drawer */}
      <button
        className="text-white bg-green-500 p-2 rounded-md fixed top-4 right-4 z-50"
        onClick={toggleDrawer}
      >
        <FontAwesomeIcon
          className="text-green"
          size="lg"
          icon={faBarsStaggered}
        />
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 md:w-96 h-full bg-black text-white font-sans transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <button
          className="text-white hover:text-white p-2 absolute top-4 left-4"
          onClick={toggleDrawer}
        >
          ✕
        </button>

        <nav className="mt-16">
          <h2 className="pt-10 text-2xl text-center md:text-3xl text-white font-sans">
            RugCosta<span className="text-green">.</span>
          </h2>
          <ul className="mt-10 text-center space-y-4">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className={`block px-4 py-2 rounded-md ${
                    activeSection === "resume"
                      ? "text-green underline underline-offset-8"
                      : "hover:underline hover:underline-offset-8 hover:text-green"
                  }`}
                onSetActive={() => setActiveSection("home")}
                onClick={handleSetActive}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="resume"
                smooth={true}
                duration={500}
                className={`block px-4 py-2 rounded-md cursor-pointer ${
                  activeSection === "resume"
                    ? "text-green underline underline-offset-8"
                    : "hover:underline hover:underline-offset-8 hover:text-green"
                }`}
                onSetActive={() => setActiveSection("resume")}
                onClick={handleSetActive}
              >
                Resume
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className={`block px-4 py-2 rounded-md cursor-pointer ${
                  activeSection === "projects"
                    ? "text-green underline underline-offset-8"
                    : "hover:underline hover:underline-offset-8 hover:text-green"
                }`}
                onSetActive={() => setActiveSection("portfolio")}
                onClick={handleSetActive}
              >
                Portfolio
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contacts"
                smooth={true}
                duration={500}
                className={`block px-4 py-2 rounded-md cursor-pointer ${
                  activeSection === "contacts"
                    ? "text-green underline underline-offset-8"
                    : "hover:underline hover:underline-offset-8 hover:text-green"
                }`}
                onSetActive={() => setActiveSection("contact")}
                onClick={handleSetActive}
              >
                Contact
              </ScrollLink>
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
