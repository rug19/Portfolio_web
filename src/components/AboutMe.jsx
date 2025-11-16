import { useTranslation } from "react-i18next";
export default function AboutMe() {
  const { t } = useTranslation();
  const textStyle = "text-white font-sans mb-5 2xl:text-lg ";
  const sectionStyle =
    "bg-gray-800  rounded-lg p-4 grid sm:grid-cols-2 max-w-[600px] lg:max-w-[600px]  2xl:max-w-[600px]  text-center sm:text-start mb-10 sm:mb-0";
  const dataLeft = [
    { label: t("AboutMe.name"), value: "Ruan Gomes" },
    { label: t("AboutMe.experience"), value: t("AboutMe.ano") },
    { label: t("AboutMe.nationality"), value: t("AboutMe.brazilian") },
    { label: t("AboutMe.freelance"), value: t("AboutMe.available") },
  ];
  const dataRight = [
    { label: t("AboutMe.phone"), value: "(+55) 85 9 9196-3095" },
    { label: t("AboutMe.email"), value: "rugdev039@gmail.com" },
    { label: t("AboutMe.languages"), value: t("AboutMe.language") },
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
        {t("AboutMe.title")}
      </h1>
      <p className="dark:text-white tracking-tighter font-sans max-w-[600px] lg:max-w-600px] 2xl:max-w-[600px] mb-6 text-center lg:text-justify 2xl:text-lg">
        {t("AboutMe.description")}
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
