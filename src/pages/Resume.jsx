import { useState } from "react";
import Education from "../components/Education";
import Particle from "../components/Particle";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";

export default function Resume() {
  const buttonClasses =
    "border-2 border-green text-white  tracking-widest font-bold font-sans px-3 py-2 rounded-xl w-60  hover:bg-green hover:text-black 2xl:text-lg";
  // Object the maps the components
  const pages = {
    education: <Education />,
    skills: <Skills />,
    aboutMe: <AboutMe />,
  };

  const [selectPage, setSelectPage] = useState("education");
  return (
    <div>
      <div
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
      <div className="h-screen sm:h-auto lg:h-screen flex  justify-center items-center mt-32 lg:mt-0">
        <div className="h-screen sm:h-auto lg:h-auto rounded-2xl  flex flex-col lg:flex-row gap-10 lg:gap-20 bg-black bg-opacity-70 p-5   lg:p-10 w-1/1 2xl:gap-x-44">
          <div className="flex flex-col gap-5">
            <h2 className="text-white font-sans font-bold text-4xl text-center lg:text-start  lg:text-4xl 2xl:text-6xl">
              Why hire me?{" "}
            </h2>
            <p className="text-white md:max-w-[600px] lg:max-w-[400px] 2xl:max-w-[600px] font-sans  text-center lg:text-justify 2xl:text-lg">
              As a Full Stack Developer, I bring expertise in building scalable,
              user-focused applications with a seamless front-to-back
              integration.
            </p>
            <div className="flex justify-center items-center lg:flex lg:items-start flex-col gap-5">
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
                About Me
              </button>
            </div>
          </div>
          {/* Render the components  */}
          <div className="flex-1 lg:h-[300px] ">{pages[selectPage]}</div>
        </div>
      </div>
    </div>
  );
}
