import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import IconLink from "../components/IconButton";
import Particle from "../components/Particle";
import Resume from "../pages/Resume";
import Projects from "./Projects";
import Contacts from "./Contacts";

export default function Home() {
  return (
    <>
      {/* Fundo de partículas */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Faz com que o fundo fique atrás do conteúdo
        }}
      >
        <Particle />
      </div>

      {/* Main container */}
      <div id="home" className=" h-screen flex justify-center items-center">
        <div className="flex flex-col-reverse justify-around flex-justify lg:flex-row items-center lg:gap-20">
          <div className=" flex flex-col gap-2 lg:gap-7 md:flexitems-center">
          <h1 className="text-4xl md:text-6xl font-sans text-white max-[400px]:text-3xl text-center lg:text-left leading-tight">
          Nice to meet you!
              <br />
              <span className="text-green">I'm Ruan Gomes</span>
            </h1>
            <p
              className=" flex p-4 md:p-0 text-center lg:text-justify  md:items-start  max-w-[700px]
             font-sans text-white "
            >
              I'm a full-stack developer dedicated to crafting comprehensive
              solutions for digital challenges. From user interface to backend,
              I'm constantly seeking ways to make technology more accessible and
              efficient.
            </p>
            <div className="flex flex-col lg:flex-row gap-5 items-center ">
              <button className="  border-2 border-green  text-green tracking-widest  font-semibold font-sans  text-xs px-3 py-2 rounded-full hover:bg-green hover:text-primary">
                DOWNLOAD CV{" "}
                <span>
                  <FontAwesomeIcon className="text-inherit" icon={faDownload} />
                </span>
              </button>
              <div className="flex gap-3">
                <IconLink icon={faGithub} />
                <IconLink icon={faLinkedinIn} />
                <IconLink icon={faInstagram} />
                <IconLink icon={faWhatsapp} />
              </div>
            </div>
          </div>

          {/* Img container */}
          <div>
            <img src="" alt="Photo" width="300" height="300"></img>
          </div>
        </div>
      </div>
      <div>
        <section id="resume" className="block lg:hidden h-screen">
          <Resume />
        </section>
        <section id="projects" className="block lg:hidden h-screen">
          <Projects />
        </section>
        <section id="contacts" className="block lg:hidden h-screen">
          <Contacts />
        </section>
      </div>
    </>
  );
}
