import Particle from "../components/Particle";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import emailjs from "@emailjs/browser";
const textStyle2 = "text-green text-lg font-sans font-bold";
const textStyle = "dark:text-white font-sans";
const iconStyle = {
  size: 25,
  className: "text-green",
};
const inputStyle =
  "bg-gray-800 text-black dark:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 font-sans h-15 lg:h-10 2xl:h-15 w-full ";
export default function Contacts() {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  function sendEmail(e) {
    e.preventDefault();

    if (
      name === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      message === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
    };
    emailjs
      .send(
        "service_euzh8to",
        "template_frb5eq4",
        templateParams,
        "ercJ2O5qmcn3slP2U"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (err) => {
          console.log("Erro", err);
        }
      );
  }

  const { t } = useTranslation();
  return (
    <section>
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
      <div className="lg:h-screen flex justify-center items-center  ">
        <div className="rounded-2xl flex  flex-col-reverse lg:flex-row gap-10 2xl:gap-44 lg:gap-20 dark:bg-black dark:bg-opacity-50 p-5 lg:p-10  md:mt-0">
          <div className="lg:mt-12">
            {" "}
            <h1 className=" text-3xl text-center md:text-justify 2xl:text-5xl font-sans mb-9 md:mb-4 dark:text-green  font-bold ">
              {t("Contact.title")}
            </h1>
            <p className="dark:text-white md:max-w-[600px] lg:max-w-[400px] 2xl:max-w-[600px] font-sans text-justify mb-5 2xl:text-lg">
              {t("Contact.subtitle")}
            </p>
            <form onSubmit={sendEmail}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  className={inputStyle}
                  type="firstname"
                  placeholder={t("Contact.firstName")}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  className={inputStyle}
                  type="lastname"
                  placeholder={t("Contact.lastName")}
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
                <input
                  className={inputStyle}
                  type="email"
                  placeholder={t("Contact.email")}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  className={inputStyle}
                  type="tel"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  placeholder={t("Contact.phone")}
                  
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
              </div>
              <textarea
                className="bg-gray-800  text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 font-sans h-36 lg:h-28 2xl:h-36 w-full mt-6"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
              <button
                type="Submit"
                className=" bg-green  text-black tracking-widest  font-extrabold font-sans  text-base px-3 py-2 rounded-full mt-2 2xl:mt-5 w-40 h-10"
              >
                {t("Contact.button")}
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-5 justify-center  items-center mt-20 md:mt-48 lg:mt-28">
            <div className=" flex   items-center gap-5 w-full">
              <div className="flex justify-center items-center  w-12 h-12  bg-gray-800  text-white rounded font-sans">
                <FaPhone {...iconStyle} />
              </div>
              <div>
                <p className={textStyle2}>{t("Contact.phone")}</p>
                <p className={textStyle}>+55 859 9196-3095</p>
              </div>
            </div>
            <div className=" flex  items-center gap-5 w-full">
              <div className="flex justify-center items-center  w-12 h-12  bg-gray-800  text-white rounded font-sans">
                <MdEmail {...iconStyle} />
              </div>
              <div>
                <p className={textStyle2}>{t("Contact.email")}</p>
                <p className={textStyle}>rugcosta1234@gmail.com</p>
              </div>
            </div>
            <div className=" flex  items-center gap-5 w-full">
              <div className="flex justify-center items-center  w-12 h-12  bg-gray-800  text-white rounded font-sans">
                <FaLocationDot {...iconStyle} />
              </div>
              <div>
                <p className={textStyle2}>{t("Contact.address")}</p>
                <p className={textStyle}>{t("Contact.city")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
