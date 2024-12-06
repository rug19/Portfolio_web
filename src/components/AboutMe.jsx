export default function AboutMe() {
  const textStyle = "text-white font-sans mb-5";
  const sectionStyle = "border border-green rounded-lg p-4 ";
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
      <h1 className="text-white text-3xl font-sans font-semibold mb-4">About Me</h1>
      <p className="text-white font-sans max-w-[500px] mb-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi fugit
        accusantium earum? Assumenda rem laborum atque.
      </p>
      <div className={`${sectionStyle} grid grid-cols-2 max-w-[500px]`}>
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
