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
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [text] = useTypewriter({
    words: ["I'm Ruan Gomes"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed:  80,
 
  });
  return (
    <>
      {/* Fundo de partículas */}
      <div
      className="bg-white dark:bg-black"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex:-1,
           // Faz com que o fundo fique atrás do conteúdo
        }}
      >
        <Particle />
      </div>

      {/* Main container */}
      <div id="home" className=" h-screen flex justify-center items-center">
        <div className="flex flex-col-reverse justify-around flex-justify lg:flex-row items-center lg:gap-20 2xl:flex-row 2xl:gap-28">
          <div className=" flex flex-col  lg:gap-7 md:flexitems-center">
            <h1 className="text-4xl md:text-6xl 2xl:text-8xl font-sans text-black dark:text-white max-[400px]:text-3xl text-center lg:text-left leading-tight md:mb-8 lg:mb-0">
              Nice to meet you!
              <br />
              <span className="text-green">{text}</span>
              
              <Cursor cursorStyle='|'/>
              
              
            </h1>
            <p
              className=" flex p-4 md:p-0 text-center lg:text-justify  md:items-start  max-w-[600px] 2xl:max-w-[730px]
             font-sans text-slate dark:text-white 2xl:text-lg md:mb-8 lg:mb-0"
            >
              I'm a full-stack developer dedicated to crafting comprehensive
              solutions for digital challenges. From user interface to backend,
              I'm constantly seeking ways to make technology more accessible and
              efficient.
            </p>
            <div className="flex flex-col lg:flex-row gap-5 items-center z-[5] ">
              <button className=" border-2 border-green  text-green tracking-widest  font-semibold font-sans  text-xs px-3 py-2 rounded-full hover:bg-green hover:text-primary md:mb-2 lg:mb-0">
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
          <div className=" mt-8 md:mt-5 md:mb-14 lg:mb-0 " >
            <motion.img
              className="w-72  h-72 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-80 lg:h-80 2xl:w-96 2xl:h-96 object-cover rounded-full"
              src="../../Design sem nome (1).png"
              alt="Photo"
              width="300"
              height="300"
              animate={{
                y: [0, -25], // Movimento de flutuação: 0px até -10px
              }}
              transition={{
                duration: 2, // Duração do ciclo
                ease: "easeInOut", // Suavidade da animação
                repeat: Infinity, // Repetição infinita
                repeatType: "reverse", // Alterna o movimento para cima e para baixo
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
