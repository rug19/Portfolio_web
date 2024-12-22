export default function Education() {
  const items = [
    {
      id: 1,
      year: 2024,
      title: "FullStack Web Developer",
      type: "Online Course",
    },
    {
      id: 2,
      year: 2024,
      title: "FullStack Web Developer",
      type: "Online Course",
    },
    {
      id: 3,
      year: 2024,
      title: "FullStack Web Developer",
      type: "Online Course",
    },
    {
      id: 4,
      year: 2024,
      title: "FullStack Web Developer",
      type: "Online Course",
    },
    {
      id: 5,
      year: 2024,
      title: "FullStack Web Developer",
      type: "Online Course",
    },
  ];

  return (
    <>
      <div>
        <div>
          <h1 className="text-white font-sans font-semibold text-4xl lg:text-3xl text-center lg:text-start mb-5">
            {" "}
            My Education
          </h1>
          <p className="text-white font-sans text-center lg:text-justify md:max-w-[600px] lg:max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur sit at aspernatur ullam eveniet tempore .
          </p>
        </div>
        {/* Container */}
        <div className=" flex flex-col  max-h-96 sm:max-h-72 max-h-65  w-full overflow-auto scrollbar-thin scrollbar-thumb-green scrollbar-track-transparent pt-2 lg:pt-0 sm:grid sm:grid-cols-2 gap-5 lg:gap-4 mt-8 mb-9 sm:mb-0 p-0">
          {items.map((item) => (
            <div
              className="flex-1 flex flex-col justify-center items-center  sm:items-start  text-center sm:text-start h-32  max-w-[100%] p-4 bg-gray-800 bg-opacity-50 font-bold text-white rounded font-sans"
              key={item.id}
            >
              <p className="text-green">{item.year}</p>
              <h2>{item.title}</h2>
              <p>{item.type}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
