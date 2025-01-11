import Particle from "../components/Particle";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const textStyle = "text-white font-sans";
const iconStyle = {
  size: 25,
  className: "text-green",
};
const inputStyle =
  "bg-gray-800 bg-opacity-50 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 font-sans h-10 w-full ";
export default function Contacts() {
  return (
    <section>
      <div
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
      <div className="h-screen flex justify-center items-center  ">
        <div className="rounded-2xl flex  flex-col-reverse lg:flex-row gap-10 2xl:gap-44 lg:gap-20 bg-black bg-opacity-50 p-5 lg:p-10 mt-72 md:mt-0">   
          <div className="lg:mt-12">
            {" "}
            <h1 className=" text-3xl 2xl:text-5xl font-sans mb-4 text-green font-bold">
              Let&apos;s work together
            </h1>
            <p className="text-white md:max-w-[600px] lg:max-w-[400px] font-sans text-justify mb-5 2xl:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <form action="" method="post">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  className={inputStyle}
                  type="firsnamet"
                  placeholder="Firstname"
                />
                <input
                  className={inputStyle}
                  type="lastname"
                  placeholder="Lastname"
                />
                <input
                  className={inputStyle}
                  type="email"
                  placeholder="Email address"
                />
                <input
                  className={inputStyle}
                  type="tel"
                  placeholder="Phone number"
                  pattern="[0-9]"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
              </div>
              <textarea
                className="bg-gray-800 bg-opacity-50 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 font-sans h-36 w-full mt-6"
                name=""
                id=""
              ></textarea>
            </form>
            <button className=" bg-green  text-black tracking-widest  font-extrabold font-sans  text-sm px-3 py-2 rounded-full mt-2 2xl:mt-5">Send message</button>
          </div>

          <div className="flex flex-col gap-5 justify-center  items-center mt-20">
            <div className=" flex   items-center gap-5 w-full">
              <div className="flex justify-center items-center  w-12 h-12  bg-gray-800 bg-opacity-50 text-white rounded font-sans">
                <FaPhone {...iconStyle} />
              </div>
              <div>
                <p className={textStyle}>Phone</p>
                <p className={textStyle}>55 859 91963095</p>
              </div>
            </div>
            <div className=" flex  items-center gap-5 w-full">
              <div className="flex justify-center items-center  w-12 h-12  bg-gray-800 bg-opacity-50 text-white rounded font-sans">
                <MdEmail {...iconStyle} />
              </div>
              <div>
                <p className={textStyle}>Email</p>
                <p className={textStyle}>rugcosta1234@gmail.com</p>
              </div>
            </div>
            <div className=" flex  items-center gap-5 w-full">
              <div className="flex justify-center items-center  w-12 h-12  bg-gray-800 bg-opacity-50 text-white rounded font-sans">
                <FaLocationDot {...iconStyle} />
              </div>
              <div>
                <p className={textStyle}>Adress</p>
                <p className={textStyle}>Ceara, Brazil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
