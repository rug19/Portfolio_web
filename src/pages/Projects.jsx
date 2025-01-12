import { FaGithub } from "react-icons/fa";
import Particle from "../components/Particle";
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";

const getTranslateZ = () => {
  const width = window.innerWidth;

  if (width <= 320) {
    return "140px"; // Pequenos smartphones
  } else if (width <= 375) {
    return "170px"; // Smartphones médios
  } else if (width <= 425) {
    return "190px"; // Telas intermediárias
  } else if (width > 425) {
    return "250px"; // Tablets
  }
};
export default function Projects() {
  const [isAnimating, setIsAnimating] = useState(false);
  const linkStyle =
    "flex items-center justify-center w-11 h-11 border-2 border-green rounded-full text-green hover:bg-green hover:text-primary cursor-pointer";
  const imgContainer = "relative z- w-full max-w-[500px]  aspect-[10/7] ";
  const buttonStyle =
    "flex items-center justify-center  lg:w-8 h-7 border-2 border-green text-black bg-green hover:text-primary cursor-pointer";

  const items = [
    {
      id: 1,
      number: "01",
      title: "Frontend Project",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
      tecnolohies: "HTML, CSS3, JavaScript",
      liveUrl:
        "https://rug19.github.io/huddle-landing-page-with-curved-sections-master/",
      gitUrl:
        "https://github.com/rug19/huddle-landing-page-with-curved-sections-master.git",
      image: "/desktop-preview.jpg",
      alt: "Land page",
    },
    {
      id: 2,
      number: "02",
      title: "Frontend Project",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum",
      tecnolohies: "React, JavaScript, CSS",
      liveUrl:
        "https://rug19.github.io/huddle-landing-page-with-curved-sections-master/",
      gitUrl:
        "https://github.com/rug19/huddle-landing-page-with-curved-sections-master.git",
      image: "/desktop-design.jpg",
      alt: "Dashboard",
    },
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  const handleBefore = () => {
    setIndiceAtual((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndiceAtual((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pt-20 sm:pt-0">
      {/* Background Particles */}
      <div
      className="bg-white dark:bg-black"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Particle />
      </div>

      <div className="  flex justify-center items-start md:items-center h-screen mt-10 md:mt-0 darK:bg-black ">
        <div className="rounded-2xl flex justify-center items-center flex-col-reverse lg:flex-row gap-10 2xl:gap-44 lg:gap-20 dark:bg-black dark:bg-opacity-50 p-5 lg:p-10 w-full max-w-7xl">
          {/* Text Section */}
          <div className="flex flex-col gap-5">
            <h2 className="text-7xl dark:text-white text-outline-dark  font-extrabold text-transparent">
              {items[indiceAtual].number}
            </h2>
            <h2 className="font-sans text-4xl 2xl:text-5xl font-bold  dark:text-white">
              {items[indiceAtual].title}
            </h2>
            <p className="dark:text-white md:max-w-[600px] lg:max-w-[400px] font-sans text-justify 2xl:text-lg">
              {items[indiceAtual].description}
            </p>
            <p className="text-green font-sans text-[20px] sm:text-2xl  border-b border-black dark:border-white pb-5">
              {items[indiceAtual].tecnolohies}
            </p>
            <div className="flex gap-3">
              <a
                className={linkStyle}
                target="_blank"
                href={items[indiceAtual].liveUrl}
              >
                <BsArrowUpRight className="size-6" />
              </a>
              <a
                className={linkStyle}
                target="_blank"
                href={items[indiceAtual].gitUrl}
              >
                <FaGithub className="size-6" />
              </a>
            </div>
          </div>

          {/* Image Section with Buttons */}
          <div className={imgContainer}>
            <motion.div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${indiceAtual * -90}deg)`,
              }}
              animate={{ rotateY: indiceAtual * -90 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
            >
              {items.map((item, index) => (
                <motion.img
                  key={index}
                  className="absolute w-full h-full"
                  src={item.image}
                  alt={item.alt}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: `rotateY(${
                      index * 90
                    }deg) translateZ(${getTranslateZ()})`, // Adaptação para cada faixa de largura
                  }}
                />
              ))}
            </motion.div>
            {/* Buttons */}
            <button
              onClick={handleBefore}
              className={`${buttonStyle}  ${
                isAnimating ? "hidden" : "block"
              } absolute top-1/2  sm:top-1/2 sm:left-0 lg:top-auto  lg:bottom-4 transform -translate-y-1/2 lg:translate-y-14 z-0 lg:left-[85%]`}
            >
              <IoIosArrowBack className="size-5" />
            </button>
            <button
              onClick={handleNext}
              className={`${buttonStyle} ${
                isAnimating ? "hidden" : "block"
              } absolute top-1/2 right-0 sm:top-1/2  lg:top-auto lg:right-0 lg:bottom-4 transform -translate-y-1/2 lg:translate-y-14 z-0`}
            >
              <IoIosArrowForward className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
