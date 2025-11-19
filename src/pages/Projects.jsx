import { useTranslation } from "react-i18next";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiPrisma,
  SiMysql,
  SiTypescript,
  SiSpring,
  SiExpo,
  SiFirebase,
} from "react-icons/si";
import Particle from "../components/Particle";
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const linkStyle =
    "flex items-center justify-center w-14 h-14 lg:w-11 lg:h-11 border-2 border-green rounded-full text-green hover:bg-green hover:text-primary cursor-pointer";

  const items = [
    {
      id: 1,
      number: "01",
      title: t("Projects.title1"),
      description: t("Projects.description1"),
      technologies: [
        { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
        { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
      ],
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
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
      ],
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
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
      ],
      liveUrl:
        "https://rug19.github.io/newsletter-sign-up-with-success-message-main/",
      gitUrl:
        "https://github.com/rug19/newsletter-sign-up-with-success-message-main.git",
      image: "/Sign-form design.jpg",
      alt: "Sign form",
    },

    {
      id: 4,
      number: "04",
      title: t("Projects.title4"),
      description: t("Projects.description4"),
      technologies: [
        { icon: <SiPrisma />, name: "Prisma", color: "#2D3748" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
        { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
      ],
      gitUrl: "https://github.com/rug19/Contact_Manangement_API_2.0.git",
      image: "/contact_management_1440x1024.png",
      alt: "Contact Management",
    },
    {
      id: 5,
      number: "05",
      title: t("Projects.title5"),
      description: t("Projects.description5"),
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
        { icon: <FaJava />, name: "Java", color: "#007396" },
        { icon: <SiSpring />, name: "Spring Boot", color: "#6DB33F" },
      ],
      gitUrl: "https://github.com/rug19/task_manager_project.git",
      image: "/task_manager_foto.PNG",
      alt: "Task Management System",
    },
    {
      id: 6,
      number: "06",
      title: t("Projects.title6"),
      description: t("Projects.description6"),
      technologies: [
        { icon: <FaReact />, name: "React Native", color: "#61DAFB" },
        { icon: <SiExpo />, name: "Expo", color: "#000020" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaJava />, name: "Java", color: "#007396" },
        { icon: <SiSpring />, name: "Spring Boot", color: "#6DB33F" },
      ],
      gitUrl: "https://github.com/PROJETOS-DE-GARAGEM/Armatech.git",
      image: "/810faea2-42d6-4f44-a91a-1b6a2f895d20.png",
      alt: "Armatech",
    },
    {
      id: 7,
      number: "07",
      title: t("Projects.title7"),
      description: t("Projects.description7"),
      technologies: [
        { icon: <FaReact />, name: "React Native", color: "#61DAFB" },
        { icon: <SiExpo />, name: "Expo", color: "#000020" },
        { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
        { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
      ],
      gitUrl: "https://github.com/PROJETOS-DE-GARAGEM/Go_drive.git",
      image: "/31ce1925-e3f2-48f8-9eb2-5e2237a05aea.png",
      alt: "Go Drive",
    },
  ];

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
              {items[currentIndex].number}
            </h2>
            <h2 className="font-sans text-4xl 2xl:text-5xl  font-bold tracking-tighter lg:max-w-[500px] 2xl:max-w-[600px]   dark:text-white">
              {items[currentIndex].title}
            </h2>
            <p
              style={{ wordSpacing: "-3px" }}
              className="dark:text-white   md:max-w-[600px] lg:max-w-[500px] 2xl:max-w-[900px]    font-sans  sm:text-justify 2xl:text-lg"
            >
              {items[currentIndex].description}
            </p>
            <div className="flex gap-3 flex-wrap items-center border-b-2 lg:border-b lg:max-w-[500px] 2xl:max-w-[600px] border-black dark:border-white pb-5">
              {items[currentIndex].technologies?.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center text-3xl lg:text-4xl hover:scale-110 transition-transform"
                  style={{ color: tech.color }}
                  title={tech.name}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              {items[currentIndex].liveUrl && (
                <a
                  className={linkStyle}
                  target="_blank"
                  href={items[currentIndex].liveUrl}
                >
                  <BsArrowUpRight className="lg:size-6 size-8" />
                </a>
              )}
              {items[currentIndex].gitUrl && (
                <a
                  className={linkStyle}
                  target="_blank"
                  href={items[currentIndex].gitUrl}
                >
                  <FaGithub className="lg:size-6 size-8" />
                </a>
              )}
            </div>
          </div>

          {/* Image Section with Buttons */}
          <div className="relative w-full max-w-[500px] aspect-[10/7]">
            <div
              className="relative w-full h-full"
              style={{ perspective: "1000px" }}
            >
              {items.map((item, index) => {
                const offset = index - currentIndex;
                const absOffset = Math.abs(offset);
                const isVisible = absOffset <= 1;

                return (
                  <motion.div
                    key={item.id}
                    className="absolute w-full h-full"
                    initial={false}
                    animate={{
                      rotateY: offset * 8,
                      scale: index === currentIndex ? 1 : 0.85,
                      x: offset * 30,
                      z: -absOffset * 100,
                      opacity: isVisible ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      zIndex: items.length - absOffset,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full rounded-lg shadow-2xl"
                      style={{
                        pointerEvents: index === currentIndex ? "auto" : "none",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Buttons */}
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0 ? items.length - 1 : prev - 1
                )
              }
              className="flex items-center justify-center lg:w-8 h-7 border-2 border-green text-black bg-green hover:text-primary cursor-pointer absolute top-1/2 sm:top-1/2 sm:left-0 lg:top-auto lg:bottom-4 transform -translate-y-1/2 lg:translate-y-14 z-20 lg:left-[85%]"
            >
              <IoIosArrowBack className="size-5" />
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === items.length - 1 ? 0 : prev + 1
                )
              }
              className="flex items-center justify-center lg:w-8 h-7 border-2 border-green text-black bg-green hover:text-primary cursor-pointer absolute top-1/2 right-0 sm:top-1/2 lg:top-auto lg:right-0 lg:bottom-4 transform -translate-y-1/2 lg:translate-y-14 z-20"
            >
              <IoIosArrowForward className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
