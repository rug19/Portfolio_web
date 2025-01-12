export default function Education() {
  const items = [
    {
      id: 1,
      year: "2023 - 2024",
      title: "FullStack Web Developer",
      type: "Digital College",
    },
    {
      id: 2,
      year: "2023 -  Present",
      title: "Systems analysis and development",
      type: "Estácio de Sá University",
    },
    {
      id: 3,
      year: "2022- 2023",
      title: "Programming logic course",
      type: "Treina web",
    },
    {
      id: 4,
      year: "2024",
      title: "Object-oriented logic course",
      type: "Treina web",
    },
    {
      id: 5,
      year: 2024,
      title: "Applications and architectures course",
      type: "Treina web",
    },
  ];

  return (
    <section>
      <div>
        <h1 className="text-white font-sans font-semibold text-4xl lg:text-3xl 2xl:text-4xl text-center lg:text-start mb-5">
          {" "}
          My Education
        </h1>
        <p className="text-white tracking-tight font-sans text-center lg:text-justify md:max-w-[600px] lg:max-w-[500px] 2xl:max-w-[600px] 2xl:text-lg">
          Here is a summary of my educational background, including academic
          degrees, online courses, and certifications.
        </p>
      </div>
      {/* Container */}
      <div className=" flex flex-col  max-h-96 sm:max-h-72 max-h-65 w-full md:w-[600px] lg:w-[500px] 2xl:w-[600px] overflow-auto scrollbar-thin scrollbar-thumb-green scrollbar-track-transparent pt-2 lg:pt-0 sm:grid sm:grid-cols-2 gap-5 lg:gap-4 mt-4 mb-9 sm:mb-0 p-0">
        {items.map((item) => (
          <article
            className="flex-1 flex flex-col justify-center items-center  sm:items-start  text-center sm:text-start h-32  max-w-[100%] p-4 bg-gray-800 bg-opacity-50 font-bold text-white rounded font-sans"
            key={item.id}
          >
            <p className="text-green ">{item.year}</p>
            <h2>{item.title}</h2>
            <p className="text-gray-500">{item.type}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
