import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
  FaJava,
} from "react-icons/fa"; // Ícones do Font Awesome
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSpring, SiTypescript, SiNextdotjs } from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const iconStyle = {
    size: 60,
    className: "hover:text-green transition-colors",
  };

  const icons = [
    {
      id: 1,
      icon: <FaHtml5 {...iconStyle} />,
    },

    {
      id: 2,
      icon: <FaCss3 {...iconStyle} />,
    },

    {
      id: 3,
      icon: <FaReact {...iconStyle} />,
    },
    { id: 4, icon: <FaJs {...iconStyle} /> },
    {
      id: 5,
      icon: <RiTailwindCssFill {...iconStyle} />,
    },
    {
      id: 6,
      icon: <FaBootstrap {...iconStyle} />,
    },
    { id: 7, icon: <BiLogoPostgresql {...iconStyle} /> },
    {
      id: 8,
      icon: <FaGitAlt {...iconStyle} />,
    },
    {
      id: 9,
      icon: <FaNodeJs {...iconStyle} />,
    },
    {
      id: 10,
      icon: <FaJava {...iconStyle} />,
    },
    {
      id: 11,
      icon: <SiSpring {...iconStyle} />,
    },

    {
      id: 12,
      icon: <SiTypescript {...iconStyle} />,
    },
    {
      id: 13,
      icon: <SiNextdotjs {...iconStyle} />,
    },
  ];
  return (
    <>
      <div>
        <div>
          <h1 className="text-black dark:text-white font-sans font-semibold text-center lg:text-start  text-4xl lg:text-3xl mb-5 2xl:text-4xl">
            {t("Skills.title")}
          </h1>
          <p className="dark:text-white tracking-tighter  font-sans lg:max-w-[600px] md:max-w-[600px] 2xl:max-w-[600px] text-center lg:text-justify 2xl:text-lg">
            {t("Skills.description")}
          </p>
        </div>

        <div className=" lg:max-h-52 h-auto  lg:overflow-auto lg:scrollbar-thin lg:scrollbar-thumb-green lg:scrollbar-track-transparent pt-2 grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4  gap-3 sm:mt-5 mb-10 sm:mb-0">
          {icons.map((item) => (
            <div
              className="  flex justify-center items-center  w-full p-4 bg-gray-800  text-white rounded font-sans"
              key={item.id}
            >
              <div>{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
