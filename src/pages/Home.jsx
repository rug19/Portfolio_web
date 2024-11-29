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
              Im a full-stack developer dedicated to crafting comprehensive
              solutions for digital challenges.From user interface to backend,
              Im constantly seeking ways to make technology more accessible and
              efficient.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              CONTACT-ME
            </button>
          </div>

          {/* Img container */}
          <div>
            <img
              src="../../public/Design sem nome (5).png"
              alt="Descrição da imagem"
              width="300"
              height="300"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
