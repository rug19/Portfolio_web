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
import { SiSpring, SiTypescript } from "react-icons/si";

export default function Skills() {
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
  ];
  return (
    <>
      <div>
        <div>
          <h1 className="text-white font-sans text-3xl mb-5">My Skills</h1>
          <p className="text-white font-sans max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            aliquam nemo est quaerat sequi cumque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>

        <div className="max-h-52  overflow-auto scrollbar-thin scrollbar-thumb-green scrollbar-track-transparent pt-2 grid grid-cols-4 gap-3 mt-5">
          {icons.map((item) => (
            <div
              className="  flex justify-center items-center  w-28 p-4 border border-green text-white rounded font-sans"
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
