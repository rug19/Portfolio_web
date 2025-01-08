import Particle from "../components/Particle";
import { FaPhone } from "react-icons/fa6";

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
      <div className="h-screen flex justify-center items-center ">
        <div className="rounded-2xl flex  flex-col-reverse lg:flex-row gap-10 lg:gap-20 bg-black bg-opacity-50 p-5 lg:p-10  max-w-7xl">
          <div>
            {" "}
            <h1 className=" text-4xl font-sans mb-5 text-green">
              Let&apos;s work together
            </h1>
            <p className="text-white md:max-w-[600px] lg:max-w-[400px] font-sans text-justify mb-5">
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
          </div>

          <div className="flex justify-center items-center">
            <div className=" flex  items-center gap-5">
              <div className="flex justify-center items-center  w-12 h-12  bg-gray-800 bg-opacity-50 text-white rounded font-sans">
                <FaPhone
                  size={iconStyle.size}
                  className={iconStyle.className}
                />
              </div>
              <div>
                <p className={textStyle}>Phone</p>
                <p className={textStyle}>55 859 91963095</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
