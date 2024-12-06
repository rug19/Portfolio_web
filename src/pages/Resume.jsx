import { useState } from "react";
import Education from "../components/Education";
import Particle from "../components/Particle";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";

export default function Resume() {
  const buttonClasses =
    "border-2 border-green text-white text-sm tracking-widest font-semibold font-sans px-3 py-2 rounded-xl w-60  hover:bg-green hover:text-black";
  // Object the maps the components
  const pages = {
    education: <Education />,
    skills: <Skills />,
    aboutMe: <AboutMe />,
  };

  const [selectPage, setSelectPage] = useState("education");
  return (
    <>
      <div>
        <div
          className="hidden md:flex"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1, // Faz com que o fundo fique atrás do conteúdo
          }}
        >
          <Particle />
        </div>
        {/* Container */}
        <div className="h-screen flex  justify-center items-center ">
          <div className=" rounded-2xl flex gap-20 bg-black bg-opacity-50 p-10 w-1/1 ">
            <div className="flex flex-col gap-5">
              <h2 className="text-white font-sans font-bold text-5xl">Why hire me? </h2>
              <p className="text-white max-w-[400px] font-sans text-justify">
                As a Full Stack Developer, I bring expertise in building
                scalable, user-focused applications with a seamless
                front-to-back integration.
              </p>
              <div className="flex flex-col gap-5">
                <button
                  onClick={() => setSelectPage("education")}
                  className={buttonClasses}
                >
                  Education
                </button>
                <button
                  onClick={() => setSelectPage("skills")}
                  className={buttonClasses}
                >
                  Skills
                </button>
                <button
                  onClick={() => setSelectPage("aboutMe")}
                  className={buttonClasses}
                >
                  About me
                </button>
              </div>
            </div>
            {/* Render the components  */}
            <div className="flex-1 h-[500px] ">{pages[selectPage]}</div>
          </div>
        </div>
      </div>
    </>
  );
}
