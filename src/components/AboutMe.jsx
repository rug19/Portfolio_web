export default function AboutMe() {
  const textStyle = "text-white font-sans mb-5 2xl:text-lg ";
  const sectionStyle =
    "bg-gray-800  rounded-lg p-4 grid sm:grid-cols-2 max-w-[600px] lg:max-w-[500px]  2xl:max-w-[600px]  text-center sm:text-start mb-10 sm:mb-0";
  const dataLeft = [
    { label: "Name", value: "Ruan Gomes" },
    { label: "Experience", value: "1 year" },
    { label: "Nationality", value: "Brazilian" },
    { label: "Freelance", value: "Available" },
  ];
  const dataRight = [
    { label: "Phone", value: "(+55) 85991963095" },
    { label: "Email", value: "rugdev039@gmail.com" },
    { label: "Languages", value: "Portuguese, English" },
  ];

  const InfoRow = ({ label, value }) => (
    <p className={textStyle}>
      <span className="font-bold text-green">{label}: </span>
      {value}
    </p>
  );

  return (
    <section>
      <h1 className="dark:text-white text-3xl font-sans font-semibold mb-4 text-center lg:text-start 2xl:text-4xl">
        About Me
      </h1>
      <p className="dark:text-white tracking-tighter font-sans max-w-[600px] lg:max-w-6500px] 2xl:max-w-[600px] mb-6 text-center lg:text-justify 2xl:text-lg">
        I am a Systems Analysis and Development student passionate about
        full-stack development. I have enhanced my skills through academic
        projects and online courses, and I am eager to apply my knowledge to
        real-world challenges.
      </p>
      <div className={`${sectionStyle} `}>
        {/* Coluna 1 */}
        <div className="flex-1 min-w-[200px]">
          {dataLeft.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
        {/* Coluna 2 */}
        <div className="flex-1 min-w-[200px]">
          {dataRight.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
