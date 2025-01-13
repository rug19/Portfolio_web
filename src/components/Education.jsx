import { useTranslation } from "react-i18next";

export default function Education() {

  const { t } = useTranslation();
  const items = [
    {
      id: 1,
      year: "2023 - 2024",
      title: t('About.myEducationTitle1'),
      type: "Digital College",
    },
    {
      id: 2,
      year: t('About.myEducationAno'),
      title: t('About.myEducationTitle2'),
      type: t('About.myEducationSubtitle1'),
    },
    {
      id: 3,
      year: "2023",
      title: t('About.myEducationTitle3'),
      type: "Treina web",
    },
    {
      id: 4,
      year: "2024",
      title: t('About.myEducationTitle4'),
      type: "Treina web",
    },
    {
      id: 5,
      year: 2024,
      title: t('About.myEducationTitle5'),
      type: "Treina web",
    },
  ];

  return (
    <section >
      <div>
        <h1 className="dark:text-white font-sans font-semibold text-4xl lg:text-3xl 2xl:text-4xl text-center lg:text-start mb-5">
          {" "}
          {t("About.myEducation")}
        </h1>
        <p className="dark:text-white text-slate tracking-tighter font-sans text-center lg:text-justify md:max-w-[600px] lg:max-w-[500px] 2xl:max-w-[600px] 2xl:text-lg">
          {t("About.myEducationDescription")}
        </p>
      </div>
      {/* Container */}
      <div className=" flex flex-col max-h-96 sm:max-h-72 max-h-65 w-full md:w-[600px] lg:w-[600px] 2xl:w-[600px] overflow-auto scrollbar-thin scrollbar-thumb-green scrollbar-track-transparent pt-2 lg:pt-0 sm:grid sm:grid-cols-2 gap-5 lg:gap-4 mt-4 mb-9 sm:mb-0 p-0 z-[5] ">
        {items.map((item) => (
          <article
            className="flex-1 flex flex-col justify-center items-center  sm:items-start  text-center sm:text-start h-32  max-w-[100%] p-4 bg-gray-800  font-bold text-white rounded font-sans"
            key={item.id}
          >
            <p className="text-green ">{item.year}</p>
            <h2 className="text-lg">{item.title}</h2>
            <p className="text-gray-400">{item.type}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
