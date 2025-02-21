import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);
  const linkStyle =
    "flex items-center justify-center w-14 h-14 lg:w-11 lg:h-11 border-2 border-green rounded-full text-green hover:bg-green hover:text-primary cursor-pointer";
  const imgContainer =
    "relative z- w-full max-w-[500px]  aspect-[10/7] ${item.id === 4 ? 'border border-black' : ''}`}";
  const buttonStyle =
    "flex items-center justify-center  lg:w-8 h-7 border-2 border-green text-black bg-green hover:text-primary cursor-pointer";

  const items = [
    {
      id: 1,
      number: "01",
      title: t("Projects.title1"),
      description: t("Projects.description1"),
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
      title: t("Projects.title2"),
      description: t("Projects.description2"),
      tecnolohies: "React, JavaScript, CSS",
      liveUrl: "https://rug19.github.io/time_tracking_dashboard/",
      gitUrl: "https://github.com/rug19/time_tracking_dashboard.git",
      image: "/desktop-design.jpg",
      alt: "Dashboard",
    },
    {
      id: 3,
      number: "03",
      title: t("Projects.title3"),
      description: t("Projects.description3"),
      tecnolohies: "React, JavaScript, CSS",
      liveUrl: "https://rug19.github.io/newsletter-sign-up-with-success-message-main/",
      gitUrl: "https://github.com/rug19/newsletter-sign-up-with-success-message-main.git",
      image: "/Sign-form design.jpg",
      alt: "Sign form",
    },

    {
      id: 4,
      number: "04",
      title: t("Projects.title4"),
      description: t("Projects.description4"),
      tecnolohies: "React, JavaScript, Tailwind, Prisma, Node, MySQL",
      gitUrl: "https://github.com/rug19/Contact_Manangement_API_2.0.git",
      image: "/teste_1.PNG",
      alt: "Contact Management",
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

      <div className="  flex justify-center items-start md:items-center h-screen mt-10 md:mt-0 lg:mt-6 2xl:mt-0 darK:bg-black ">
        <div className="rounded-2xl flex justify-center items-center flex-col-reverse lg:flex-row gap-10 2xl:gap-44 lg:gap-20 dark:bg-black dark:bg-opacity-50 p-5 lg:p-10 w-full max-w-7xl 2xl:p-0">
          {/* Text Section */}
          <div className="flex flex-col gap-5">
            <h2 className="text-7xl dark:text-white text-outline-dark  font-extrabold text-transparent">
              {items[indiceAtual].number}
            </h2>
            <h2 className="font-sans text-4xl 2xl:text-5xl  font-bold tracking-tighter lg:max-w-[500px] 2xl:max-w-[600px]   dark:text-white">
              {items[indiceAtual].title}
            </h2>
            <p
              style={{ wordSpacing: "-3px" }}
              className="dark:text-white   md:max-w-[600px] lg:max-w-[500px] 2xl:max-w-[900px]    font-sans  sm:text-justify 2xl:text-lg"
            >
              {items[indiceAtual].description}
            </p>
            <p className="text-green font-sans text-[20px] sm:text-2xl font-bold lg:font-normal border-b-2 lg:border-b lg:max-w-[500px] 2xl:max-w-[600px] border-black dark:border-white pb-5">
              {items[indiceAtual].tecnolohies}
            </p>
            <div className="flex gap-3">
              <a
                className={linkStyle}
                target="_blank"
                href={items[indiceAtual].liveUrl}
              >
                <BsArrowUpRight className="lg:size-6 size-8" />
              </a>
              <a
                className={linkStyle}
                target="_blank"
                href={items[indiceAtual].gitUrl}
              >
                <FaGithub className="lg:size-6 size-8" />
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
                  className={`absolute w-full h-full ${
                    item.id === 4 ? "border border-black" : ""
                  }`} // Adiciona a borda preta apenas para o item com id 4
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
