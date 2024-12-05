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
          <h1 className="text-white font-sans text-3xl"> My Education</h1>
          <p className="text-white font-sans max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur sit at aspernatur ullam eveniet tempore .
          </p>
        </div>
        {/* Container */}
        <div className="h-72 w-100 overflow-y-scroll scroll-smooth focus:scroll-auto pt-4  grid grid-cols-2 gap-4 mt-5 ">
          {items.map((item) => (
            <div className="flex-1 h-32 max-w-[100%] p-4 border border-green text-white rounded font-sans" key={item.id}>
              <p>{item.year}</p>
              <h2>{item.title}</h2>
              <p>{item.type}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
