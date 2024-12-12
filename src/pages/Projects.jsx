import { FaGithub } from "react-icons/fa";
import Particle from "../components/Particle";
import { BsArrowUpRight } from "react-icons/bs";

export default function Projects() {
  const items = [
    {
      id: 1,
      image: "/public/desktop-preview.jpg",
      alt: "Land page",
    },
  ];
  const linkStyle =
    "flex items-center justify-center w-11 h-11 border-2 border-green rounded-full text-green hover:bg-green hover:text-primary cursor-pointer";
    const imgStyle = "h-[350px]"
  return (
    <>
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
        <section className="h-screen flex justify-center items-center ">
          <div className="h-screen sm:h-auto lg:h-auto rounded-2xl  flex flex-col lg:flex-row gap-10 lg:gap-20 bg-black bg-opacity-50 p-5 lg:p-10 w-1/1 ">
            <div className="flex flex-col gap-5">
              <h1></h1>
              <h2 className=" font-sans text-4xl font-bold text-white">
                Frontend Project
              </h2>
              <p className="text-white md:max-w-[600px] lg:max-w-[400px] font-sans  text-center lg:text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                nemo repudiandae nulla placeat reprehenderit aliquid.
              </p>
              <p className="text-green font-sans text-2xl  border-b-[1px] pb-5">
                HTML, Css 3, JavaScript
              </p>
              <div className="flex gap-3">
                <a className={linkStyle} href="">
                  {" "}
                  <BsArrowUpRight className="size-6 " />
                </a>
                <a className={linkStyle} href="">
                  <FaGithub className="size-6 " />
                </a>
              </div>
            </div>
            <div>
              {items.map((item) => (
                <div key={item.id}>
                  <img className={imgStyle} src={item.image} alt={item.alt} />
                  <div>
                    <button></button>
                    <button></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
