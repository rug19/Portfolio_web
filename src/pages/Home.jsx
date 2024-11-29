import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import IconLink from "../components/IconButton";

export default function Home() {
  return (
    <>
      {/* Main container */}
      <div className=" h-screen flex justify-center items-center">
        <div className="flex flex-col-reverse justify-around flex-justify md:flex-row items-center gap-20">
          <div className=" md:flexitems-center">
            <h1 className=" text-6xl mb-6 font-sans text-white">
              Nice to meet you!
              <br />
              <span className="text-green">I'm Ruan Gomes</span>
            </h1>
            <p className=" max-w-[700px] mb-9 font-sans text-white ">
              I'm a full-stack developer dedicated to crafting comprehensive
              solutions for digital challenges.From user interface to backend,
              I'm constantly seeking ways to make technology more accessible and
              efficient.
            </p>
            <div className="flex gap-5 items-center ">
              <button className="  border-2 border-green  text-green tracking-widest  font-semibold font-sans  text-xs px-3 py-2 rounded-full hover:bg-green hover:text-primary">
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
          <div>
            <img src="" alt="Photo" width="300" height="300"></img>
          </div>
        </div>
      </div>
    </>
  );
}
