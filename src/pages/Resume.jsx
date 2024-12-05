import Education from "../components/Education";
import Particle from "../components/Particle";

export default function Resume() {
  return (
    <>
      <div>
        <div
          className="hidden md:flex"
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
        {/* Container */}
        <div className="h-screen flex  justify-center items-center">
          <div className=" border-2 rounded-2xl border-green flex gap-20 bg-black bg-opacity-90 p-10 w-1/1 ">
            <div className="flex flex-col gap-5">
              <h2 className="text-white font-sans text-5xl">Why hire me? </h2>
              <p className="text-white max-w-[400px] font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                necessitatibus iure dicta.
              </p>
              <div className="flex flex-col gap-5">
                <button className="border-2 border-green text-white text-sm tracking-widest  font-semibold font-sans  px-3 py-2 rounded-xl w-52 hover:bg-green hover:text-black">
                  
                  Education
                </button>
                <button  className="border-2 border-green text-white text-sm tracking-widest  font-semibold font-sans  px-3 py-2 rounded-xl w-52 hover:bg-green hover:text-black">Skills</button>
                <button  className="border-2 border-green text-white text-sm tracking-widest  font-semibold font-sans  px-3 py-2 rounded-xl w-52 hover:bg-green hover:text-black">About me</button>
              </div>
            </div>
            <div>
              <Education/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
